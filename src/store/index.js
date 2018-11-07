import Vue from 'vue'
import Vuex from 'vuex'


import state from './state'
import actions from './actions'
import mutations from './mutations'

//creating module:
const info = {
  namespaced: true,
  state: {
    matchDate: '01/01/2021'
  },
  getters: {
    teamACount(state, getters, rootState) {
      return rootState.teamA.length
    }
  },
  mutations: {},
  actions: {}
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    info: info
  },
  state, //global data
  getters: { //computed properties
    studentCount(state) {
      return state.students.length
    }
  },
  mutations, //used for changing data/state
  actions 
  // like method but not recommended to change state here: use mutations!
})