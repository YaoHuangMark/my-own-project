import loading from './loading.vue'
import Vue from 'vue'

const defaults = {
    showload: false,
    duration: 2000
}
const loadingVueConstructor = Vue.extend(loading)
loadingVueConstructor.prototype.close = function () {
    var vm = this
    this.$on('after-leave', _ => {
        if (vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el)
        }
        this.$destroy()
    })
    vm.showload = false
}
const load = (options = {}) => {
    if (Vue.prototype.$isServer) return
    if (document.querySelector('#loading') && options.showload === false) {
        let tpl = document.querySelector('#loading')
        document.body.removeChild(tpl)
        return
    }
    options = Object.assign({}, defaults, options)
    let parent = document.body
    // eslint-disable-next-line new-cap
    let instance = new loadingVueConstructor({
        el: document.createElement('div'),
        data: options
    })
    parent.appendChild(instance.$el)
    Vue.nextTick(() => {
        if (options.showload !== false) {
            instance.showload = options.showload
        } else {
            parent.appendChild(instance.$el)
        }
    })
    return instance
}
export default load
