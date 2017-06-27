<template>
  <div id="app">
    <truc></truc>
  </div>
</template>

<script>

import truc  from "./components/truc.vue"
// import poids from "./components/poids.vue"


export default {
  components: {truc},
  name: 'app',
  mounted(){
    console.log(this.$store);
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
