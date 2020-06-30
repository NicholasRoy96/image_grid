import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    gridExpanded: true
  },
  mutations: {
    setGridExpanded(state) {
      state.gridExpanded = !state.gridExpanded
    }
  },
  actions: {
    toggleGridExpanded({commit}) {
      commit('setGridExpanded')
    }
  }
})