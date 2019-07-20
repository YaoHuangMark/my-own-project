import Axios from 'axios'
import app from '../main'

const service = Axios.create({
    timeout: 300000 // 单位 s
})

service.interceptors.request.use(config => {
    app.$loading({
        showload: true
    })
    return config
}, error => {
    app.$loading({
        showload: false
    })
    return Promise.reject(error)
})

service.interceptors.response.use(response => {
    if (response.status === 200) {
        app.$loading({
            showload: false
        })
        if (response.msg) {
            app.$message({
                text: response.msg
            })
        } else {
            app.$message({
                text: '请求成功!'
            })
        }
    }
    return response
}, error => {
    app.$loading({
        showload: false
    })
    return Promise.reject(error)
})

export default service
