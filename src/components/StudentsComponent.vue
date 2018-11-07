<template>
  <div>
    <h1>Students</h1>
    <ul>
      <li v-for="(student,index) in students" :key="student.id">
        {{student.name}}
        <i>{{student.games.length}} games he plays</i>
        <button :disabled="student.selected" @click="addTeamMember('A', index)">Team A</button>
        <button :disabled="student.selected" @click="addTeamMember('B', index)">Team B</button>
      </li>
    </ul>
  <hr>
  <TeamComponent type='A'>Team A</TeamComponent>
  <TeamComponent type='B'>Team B</TeamComponent>
  </div>
</template>

<script>
import TeamComponent from './TeamComponent.vue' 
import store from '../store/index'

export default {
  components:{
    TeamComponent
  },
  computed:{
    students(){
      return store.state.students
    }
  },
  methods:{
    addTeamMember(type, index){
     store.dispatch('addTeamMember',{type, index})
    }
  },
  //get data when component is created
  created() {
    //dispatch to call actions
    store.dispatch('getStudents')
  },
}
</script>

<style>
ul{
  list-style: none;
}
ul li {
  padding: 5px;
}
button{
 margin-left: 5px; 
}
</style>
