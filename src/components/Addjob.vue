<template>
  <div class="rows">
  <h1> Принятие на работу </h1>
      <div>
          <div class="mb-3">
          <label for="CatName" class="form-label">Кличка</label>
          <input v-model="staff.nicname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="catAge" class="form-label">Возраст</label>
        <input v-model="staff.age" type="text" class="form-control" id="catAge">
      </div>
      <button v-on:click="addStaff" class="btn btn-primary">Сохранить</button>
      </div>
  </div>
</template>

<script>
import Cat from '@/lib/Cat.js'
export default {
  name: 'Addjob',
  props: {
    msg: String
  },
  data(){
    return{
      staff: Cat
    }
  },
  methods:{
    addStaff(){
          this.$store.commit('addJob', this.staff)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
