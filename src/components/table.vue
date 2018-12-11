<template>
<div class="list">
     <table class="table-responsive highlight z-depth-1">
        <tbody>
          <tr v-on:click="getUserView(p)" class="hoverable" v-for ="p in users" :key="p.nt">
            <td><img :src="p.picture.medium" alt="" class="circle responsive-img"></td>
            <td><b>{{p.name.first}}</b></td>
            <td>{{p.email}}</td>
             <td>{{p.location.city}}</td>
            <td>{{p.cell}}</td>
            <td>
              <i v-on:click = 'deletar(p)' class="material-icons">delete</i>
              <i class="material-icons">select_all</i>
              <i v-on:click = 'atender(p)' class="material-icons">check</i>
            </td>
          </tr>
        </tbody>
      </table>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  props: ['users'],
  name: 'tables',
  data: () => {
  return {
  }
},
  methods: {
    atender (p){
     this.$store.commit('pushAtendidos', p);
    },
    deletar (p){
     this.$store.commit('pushLixeira', p);
    },
    getUserView(p){
      this.$router.push({ name:'user', query:{ userData: p} });
    }
  }
}
</script>
<style lang="scss">
  .list{
    margin-top: 5rem;
    width: 100%;
    table{
      cursor: pointer;
      td{
         padding-left: 3rem;
         .material-icons{
           padding-left: 1rem;
         }
      }
    }
    img{
      width: 50px;
    }
  }
</style>
