function defineReactive (obj, key, value) {
    observer(value)
    var dep = new Dep()
    Object.defineProperty(obj, key, {
        get: function () {
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return value
        },
        set: function (newVal) {
            if (value !== newVal) {
                value = newVal
                dep.notify() // 通知订阅器
            }
        }
    })
}
function observer (obj) {
    if (!obj || typeof obj !== 'object') return

    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}
function Dep () {
    this.subs = []
}

Dep.prototype.addSub = function (sub) {
    this.subs.push(sub)
}
Dep.prototype.notify = function () {
    // eslint-disable-next-line no-console
    console.log('属性变化通知 watcher 执行更新视图函数')
}
Dep.target = null
