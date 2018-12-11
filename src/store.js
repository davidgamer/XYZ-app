import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pessoas: [],
    atendidos: [],
    lixeira: []
  },
  mutations: {
    pushPeople (state, payload) {
      state.pessoas = payload
    },
    pushAtendidos (state, payload) {
      state.atendidos.push(payload)
    },
    pushLixeira (state, payload) {
      state.lixeira.push(payload)
    }
  },
  actions: {

  }
})
