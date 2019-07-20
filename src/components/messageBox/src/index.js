import Vue from 'vue'
import messageBox from './messageBox.vue'

const defaults = {
    alert: false,
    text: '',
    duration: 3000,
    type: 'success'
}
const messageVueConstructor = Vue.extend(messageBox)
messageVueConstructor.prototype.close = function () {
    var vm = this
    this.$on('after-leave', _ => {
        if (vm.$el && vm.$el.parentNode) {
            vm.$el.parentNode.removeChild(vm.$el)
        }
        this.$destroy()
    })
    vm.alert = false
}
const message = (options = {}) => {
    if (Vue.prototype.$isServer) return
    options = Object.assign({}, defaults, options)
    let parent = document.body
    // eslint-disable-next-line new-cap
    let instance = new messageVueConstructor({
        el: document.createElement('div'),
        data: options
    })
    parent.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.alert = true
        setTimeout(function () {
            instance.close()
            if (document.querySelector('.alert-m')) {
                let tpl = document.querySelector('.alert-m')
                document.body.removeChild(tpl)
            }
        }, options.duration)
    })
    return instance
}
export default message
