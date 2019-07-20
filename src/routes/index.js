import Vue from 'vue'
import Router from 'vue-router'
const promise = r => {
    require.ensure([], () => r(require('../pages/javascript/promise.vue')))
}
const home = r => {
    require.ensure([], () => r(require('../pages/home.vue')))
}

Vue.use(Router)
// @/ 是 src/ 的别名
export const routes = [
    {
        path: '/',
        component: () => import('@/pages/login'),
        name: '登录'
    },
    {
        path: '/page',
        component: () => import('@/pages/page'),
        name: 'page',
        isHidden: false,
        meta: {
            title: '',
            requireAuth: true
        },
        children: [{
            path: '/home',
            component: home,
            name: '监控首页'
        }, {
            path: '/promise',
            component: promise,
            name: 'promise'
        }, {
            path: '/Vue',
            component: () => import('@/pages/javaScript'),
            name: 'Vue',
            isHidden: false
        }]
    }
]
const router = new Router({ routes: routes, mode: 'history' })
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        const token = sessionStorage.getItem('token')
        if (token === 'hy') { // 判断当前的token是否存在
            next()
        } else {
            next({
                path: '/',
                query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    } else {
        next()
    }
})
export default router
