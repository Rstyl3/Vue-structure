export default { //methods
    //context = access like this.
    getStudents(context) {
        context.commit('setStudents')
    },
    addTeamMember(context, data) {
        context.commit('addMemberToTeam', data)
        context.commit('disableSelectedState', data.index)
    },
    removeFromTeam(context, data) {
        context.commit('enableSelectedState', data)
        context.commit('spliceFromTeam', data)
    }
}