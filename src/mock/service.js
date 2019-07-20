import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
export default {
    bootstrap () {
        var mock = new MockAdapter(axios)

        mock.onGet('/users').reply(200, {
            users: [
                { id: 1, name: 'Huang Yao' }
            ]
        })
        mock.onPost('/login').reply(config => {
            return new Promise((resolve, reject) => {
                if (JSON.parse(config.data).name === 'huangyao' && JSON.parse(config.data).password === 'e10adc3949ba59abbe56e057f20f883e') {
                    setTimeout(() => {
                        resolve([200, { msg: '登录成功' }])
                    }, 2000)
                } else {
                    setTimeout(() => {
                        resolve([201, { msg: '登录名或密码错误' }])
                    }, 2000)
                }
            })
        })
        mock.onGet('/loginout').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, { msg: '退出登录成功' }])
                }, 2000)
            })
        })
    }
}
