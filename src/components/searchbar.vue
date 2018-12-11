<template>
  <nav v-if="show" class="barColor z-depth-1">
    <div class="nav-wrapper">
      <div class="row">
      <div class="col s2 m2 l2"> <a href="#" class="brand-logo center-align">
        <i class="material-icons ">cloud</i></a>
        </div>
      <div class="col s8">
         <input size="100" type="search" placeholder="Buscar" name="search" id="roundInput">
      </div>
      <div class="col s2 m2 l2"><i class="material-icons center-align">account_circle</i></div>

      </div>

    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'searchbar',
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
  .barColor{
    background-color: #2c3e50;
   // display:flex;
  #roundInput{
     border-radius: 25px;
     background-color: #fff;
   }
      input[type=search]{
        color:#2c3e50;
        font-weight: 600;
        text-align: justify;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif !important;
        padding-left: 2rem !important;
    }
  .lupa-color{
     color:#aec000;
     position: relative;
   }
  }
  .brand-logo{
    width:2rem;
    left:0;
  }
</style>
