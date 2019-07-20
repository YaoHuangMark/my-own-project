import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import createPersistedState from 'vuex-persistedstate' // 解决刷新页面后 vuex 数据丢失

Vue.use(Vuex)
const state = {
    person: {
        name: 'huangyao',
        password: '123456'
    }
}

const mutations = {
    CLEARPERSON (state) {
        state.person = {
            name: '',
            password: ''
        }
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})
