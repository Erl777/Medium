import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 0
    },
    posts: []
  },
  mutations: {
    setUserId (state, payload) {
      state.user = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
