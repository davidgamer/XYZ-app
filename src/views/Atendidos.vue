<template>
 <div class="col s10 m10 l10">
    <tablecomponet :users = peoples ></tablecomponet>
  </div>
</template>

<script>
import tablecomponet from '@/components/table.vue'
// @ is an alias to /src
export default {
  name: 'atendidos',
    components:{
    tablecomponet
  },
    computed: {
    peoples() {
      return this.$store.state.atendidos
    }
  },
}
</script>
