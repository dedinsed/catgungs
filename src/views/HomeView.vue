<template>
  <div class="rows">
  <div v-for="cat in staff" :key="cat.nicname">
    {{cat.nicname}}
  </div>
 </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  computed:{
    staff(){
      return this.$store.getters.getAllWorker
    }
  }
}
</script>
