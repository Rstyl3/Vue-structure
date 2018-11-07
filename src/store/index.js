import Vue from 'vue'
import Vuex from 'vuex'
import data from '../api/data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //data
    students: [],
    teamA: [],
    teamB: []
  },
  getters: { //computed properties
    studentCount(state) {
      return state.students.length
    }
  },
  mutations: { //Used for changing data
    //state = access like this.
    setStudents(state) {
      state.students = data.getStudents()
    },
    addMemberToTeam(state, data) {
      data.type === 'A' ? state.teamA.push(state.students[data.index]) : state.teamB.push(state.students[data.index])
    },
    enableSelectState(state, data) { //enable button
      // state.students.forEach((student) =>{
      //   student.id === data.member.id ? student.selected = false : ''
      // }) 
      state.students[data.member.id - 1].selected = false
    },
    disableSelectState(state, index) { //disable button
      state.students[index].selected = true
    },
    spliceFromTeam(state, data) {
      data.type === 'A' ? state.teamA.splice(data.index) : state.teamB.splice(data.index)
    }

  },
  actions: { //methods
    //context = access like this.
    getStudents(context) {
      context.commit('setStudents')
    },
    addTeamMember(context, data) {
      context.commit('addMemberToTeam', data)
      context.commit('disableSelectState', data.index)
    },
    removeFromTeam(context, data) {
      context.commit('enableSelectState', data)
      context.commit('spliceFromTeam', data)
    }
  }
})