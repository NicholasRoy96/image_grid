import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    images: [],
    gridExpanded: true,
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
    setGridExpanded(state) {
      state.gridExpanded = !state.gridExpanded;
    },
  },
  actions: {
    updateImages({ commit }, images) {
      commit("setImages", images);
    },
    toggleGridExpanded({ commit }) {
      commit("setGridExpanded");
    },
  },
  plugins: [new VuexPersistence().plugin]
})