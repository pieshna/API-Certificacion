<template>

<nav id="nav" class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <router-link class="nav-link" to="/"><a class="navbar-brand">Logo</a></router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link> 
        </li>
        <li class="nav-item" v-if="token!=null">
          <router-link class="nav-link" to="/about">About</router-link> 
        </li>
        <li v-if="token!=null" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/productos/agregar">Agregar Producto</router-link></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><router-link class="dropdown-item" to="/productos">Productos</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Iniciar sesion</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

  <router-view/>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  methods: {
    ...mapActions(['leerToken'])
  },
  created() {
    this.leerToken();
  },
  computed:{
    ...mapState(['token'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
