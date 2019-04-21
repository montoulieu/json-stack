import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    stackData: [],
    stackOpen: false
  },
  mutations: {
    loadStackData (state, payload) {
      // skip JSON parse if file data is already an object
      if (typeof payload === 'object') {
        state.stackData = payload
      } else {
        state.stackData = JSON.parse(payload)
      }
    },
    stackToggleView (state) {
      state.stackOpen = !state.stackOpen
    }
  },
  actions: {

  }
})
