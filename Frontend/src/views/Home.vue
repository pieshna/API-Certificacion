<template>
  <div class="home" v-if="token===null">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <div class="home" v-if="token!=null">
    <h1>logueado</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    ...mapState(['token'])
  }
}
</script>
