import loading from './src/index'
export default {
    install (Vue) {
        Vue.prototype.$loading = loading
    }
}
