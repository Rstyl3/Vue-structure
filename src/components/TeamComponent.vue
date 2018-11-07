<template>
    <div>
        <h1>Team {{type}}</h1>
        <ul>
            <li v-for="(member, index) in team" :key="member.id">
                {{member.name}}
                <button @click="removeFromTeam(type,index, member)">X</button>
            </li>
        </ul> 
    </div>
</template>

<script>
import store from '../store/index'
export default {
  props: ['type'],
  computed: {
    team() {
      //Get data from store
      return this.type == 'A' ? store.state.teamA : store.state.teamB
    },
  },
  methods:{
    removeFromTeam(type,index, member){
      store.dispatch('removeFromTeam', {type,index, member})
    }
  }
}
</script>

<style>
</style>
