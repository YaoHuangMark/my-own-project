import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate, { Validator } from 'vee-validate' // 在vuetify中引入的表单验证插件
import CN from 'vee-validate/dist/locale/zh_CN' // VeeValidate 提示语言包
import vuex from 'vuex'
import axios from 'axios'
import VueMessage from '../components/messageBox/index' // 提示语句
import VueLoading from '../components/loading/index' // 请求loading
import Mock from '../mock' // mock 服务

Vue.prototype.$axios = axios // 全局定义 $axios 对象
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/hy' // 设置axios 基础 请求 url
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '/investorhub' // 基地址，所有请求都会加上前缀
}

Vue.use(VueMessage)
Vue.use(VueLoading)
Vue.use(Vuetify, {
    iconfont: 'mdi', // 引用图标
    theme: {
        my_dark: '#314156'
    }
})
Vue.use(VeeValidate)
Validator.localize('zh_CN', CN) // 本地化 VeeValidate 的错误提示语言
Vue.use(vuex)

Mock.bootstrap() // 启动mock服务
