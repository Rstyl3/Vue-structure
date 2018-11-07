<template>
  <div>
    <h1>Students - Total is {{studentCount}}</h1>
    <ul>
      <li v-for="(student,index) in students" :key="student.id">
        {{student.name}}
        <i>{{student.games.length}} games he plays</i>
        <button :disabled="student.selected" @click="addTeamMember({type:'A', index})">Team A</button>
        <button :disabled="student.selected" @click="addTeamMember({type:'B', index})">Team B</button>
      </li>
    </ul>
    <hr>
    <TeamComponent type='A'>Team A</TeamComponent>
    <TeamComponent type='B'>Team B</TeamComponent>
    <InfoComponent></InfoComponent>
  </div>
</template>

<script>
import InfoComponent from './InfoComponent.vue'
import TeamComponent from './TeamComponent.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    TeamComponent,
    InfoComponent,
  },
  computed: {
    ...mapState(['students']),
    ...mapGetters(['studentCount']),
  },
  methods: {
    ...mapActions(['addTeamMember']),
  },
  //get data when component is created
  created() {
    //dispatch to call actions
    this.$store.dispatch('getStudents')
  },
}
</script>

<style>
ul {
  list-style: none;
}
ul li {
  padding: 5px;
}
button {
  margin-left: 5px;
}
</style>
