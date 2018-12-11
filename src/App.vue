<template>
      <div id="app">
         <topNav></topNav>
              <div class="row">
          <asidebar></asidebar>
          <router-view/>
      </div>
  </div>
</template>
<script>
import asidebar from '@/components/asidebar.vue'
import topNav from '@/components/searchbar.vue'
export default {
  data: () => {
  return {
    people:{}
  }
},
  components: {
    asidebar,
    topNav
  },
  created() {
  },
  methods: {
    getUsers(){
      fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(res => console.log(res.results));
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss">
@import '~materialize-css/sass/materialize.scss';
html{
    font-family: 'Open Sans', sans-serif !important;

}
#app {
}
#nav {
  ul{
      li{
        list-style-type: none;
           color: gray;
      }
  }
 li{
a {
    &.router-link-exact-active {
      color:green;
    }
  }
 }
}
</style>
