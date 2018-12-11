<template>
  <div class="col s10 m10 l10">
    <tablecomponet :users = peoples ></tablecomponet>
  </div>
</template>

<script>
// @ is an alias to /src
import tablecomponet from '@/components/table.vue'
export default {
  data: () => {
  return {
    people:{}
  }
},
  name: 'home',
components: {
    tablecomponet
  },
created () {
  this.getUsers();
  },
  computed: {
    peoples() {
      return this.$store.state.pessoas
    }
  },
methods: {
getUsers() {
  fetch('https://randomuser.me/api/?page=3&results=10&seed=abc&nat=BR')
     .then(res => res.json())
       .then(res => {
        this.people = res.results;
        this.$store.commit('pushPeople', this.people)
     }
    )}
  }
}
</script>
