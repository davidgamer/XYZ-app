<template>
  <div class="col s2 m2 l2 z-depth-1">
        <ul v-if="show" id="nav-mobile" class="side-menu">
          <router-link to="/"><li><i class="material-icons">select_all</i> Todos</li></router-link>
          <router-link to="/atendidos"><li><i class="material-icons">done_all</i> Atendidos</li></router-link>
         <router-link to="/lixeira"> <li><i class="material-icons">delete</i> Lixeira</li></router-link>
        </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'asideBar',
    data: () => {
    return {
        show:true
    }
  },
watch: {
   $route: function() {
    if (this.$route.name == 'user') {
        this.show = false
        } else  {
        this.show = true;
    }
  }
}
}
</script>
<style lang="scss">
ul{
  padding-right: 1rem;
}
    #nav-mobile{
    height: auto;
      a{
          color:#87868a;
          padding: 1.5rem;
          font-size: 1.2rem;
      }
    }
      .router-link-exact-active {
            li{
              color:#b5c231;
          }
       }
</style>
