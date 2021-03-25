<template>
  <div class="home" v-if="token===null">
    <login/>
  </div>
  <div class="home" v-if="token!=null">
    <Logued/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/views/usuarios/login.vue'
import Logued from '@/views/Logued.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    Logued,
    login
  },
  computed:{
    ...mapState(['token'])
  }
}
</script>
