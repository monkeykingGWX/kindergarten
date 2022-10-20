import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 初始化，从storage中加载数据
const initState = {
  repeatInfo: { // 表单提交信息【防止重复提交】
    url: '',
    data: null,
    timestamp: 0
  },
  jwtToken: { // 登陆token
    token: '',
    expire: 0
  }
}

const tokenStr = localStorage.getItem('token')
if (tokenStr) {
  initState.jwtToken = JSON.parse(tokenStr)
}

export default new Vuex.Store({
  state: initState,
  getters: {
  },
  mutations: {
    storeRepeat (state, payload) {
      state.repeatInfo = payload
    },
    saveToken (state, payload) {
      state.jwtToken = payload
      if (payload) {
        localStorage.setItem('token', JSON.stringify(payload))
      }
    },
    clearToken (state) {
      state.jwtToken = { // 登陆token
        token: '',
        expire: 0
      }
      localStorage.removeItem('token')
    }
  },
  actions: {
    storeRepeat ({ commit }, payload) {
      commit('storeRepeat', payload)
    },
    saveToken ({ commit }, payload) {
      commit('saveToken', payload)
    },
    clearToken ({ commit }) {
      commit('clearToken')
    }
  },
  modules: {
  }
})
