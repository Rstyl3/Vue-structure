import data from '../api/data.js'

export default { //Used for changing data
    //state = access like this.
    setStudents(state) {
        state.students = data.getStudents()
    },
    addMemberToTeam(state, data) {
        data.type === 'A' ? state.teamA.push(state.students[data.index]) : state.teamB.push(state.students[data.index])
    },
    enableSelectedState(state, data) { //enable button
        // state.students.forEach((student) =>{
        //   student.id === data.member.id ? student.selected = false : ''
        // }) 
        state.students[data.member.id - 1].selected = false
    },
    disableSelectedState(state, index) { //disable button
        state.students[index].selected = true
    },
    spliceFromTeam(state, data) {
        data.type === 'A' ? state.teamA.splice(data.index, 1) : state.teamB.splice(data.index, 1)
    }
}