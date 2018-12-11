<template>
 <div class="col s10 m10 l10">
    <tablecomponet :users = peoples ></tablecomponet>
  </div>
</template>

<script>
// @ is an alias to /src
import tablecomponet from '@/components/table.vue'
export default {
  name: 'lixeira',
   components:{
    tablecomponet
  },
  computed: {
  peoples() {
    return this.$store.state.lixeira
  }
},
}
</script>
