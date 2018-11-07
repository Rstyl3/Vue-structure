<template>
    <div>
        <h1>Team {{type}}</h1>
        <ul>
            <li v-for="(member, index) in team" :key="member.id">
                {{member.name}}
                <button @click="removeFromTeam({type,index, member})">X</button>
            </li>
        </ul> 
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['type'],
  computed: {
    team() {
      //Get data from store
      return this.type === 'A' ? this.$store.state.teamA : this.$store.state.teamB
    },
  },
  methods:{
      ...mapActions(['removeFromTeam'])
  }
}
</script>

<style>
</style>
