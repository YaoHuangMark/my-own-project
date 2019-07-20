import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // vuetify icon style-css
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import store from './vuex/store'
import './commonUse'
import MessageBox from './components/confirm/index'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icons'
import * as filters from './filters'

Vue.use(MessageBox)
Vue.use(elementUi)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

var app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

export default app
