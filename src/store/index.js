import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgdata: []
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getImg({ commit }) {
      axios({
        url: '/getImg'
      }).then(res => {
        commit({ type: 'setState', key: 'imgdata', value: res.data.data })
      })
    }
  },
  modules: {
  }
})
