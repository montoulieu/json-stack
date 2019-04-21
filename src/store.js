import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    stackData: [],
    stackOpen: false,
    currentNode: 0,
  },
  mutations: {
    loadStackData (state, upload) {
      // skip JSON parse if file data is already an object
      if (typeof upload === 'object') {
        state.stackData = upload
      } else {
        state.stackData = JSON.parse(upload)
      }
      // eslint-disable-next-line
      // console.log(upload)
    },
    stackToggleView (state) {
      state.stackOpen = !state.stackOpen
    },
    deleteStackCard (state, id) {
      let index = state.stackData.findIndex(card => card.id === id)
      state.stackData.splice(index, 1)
    },
    setCurrentNode (state, node) {
      state.currentNode = node
    }
  },
  actions: {

  }
})
