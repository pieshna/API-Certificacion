<template>
  <div class="home">
    <br><br>
    <h1>Bienvenido</h1>
    <div class="container">
      <div class="row justify-content-center">
          <router-link to="/productos" class="col-md-3">
        <div>
          <span>Repuestos</span><br>
          <img src="/storage/img/img1.svg">
        </div>
          </router-link>
          <router-link to="/usuarios" class="col-md-3">
        <div>
          <span>Usuarios</span><br>
          <img src="/storage/img/img2.svg">
        </div>
          </router-link>
          <router-link to="/proveedor" class="col-md-3">
        <div>
          <span>Proveedores</span><br>
          <img src="/storage/img/img3.svg">
        </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Logued',
  data() {
    return {
      
    }
  },
}
</script>
<style scoped>
img{
  max-width: 10rem;
  max-height: 10rem;
  margin-left: 18%;
}
span{
  margin-left: 35%;
  color: black;
  font-weight: bold;
}
a{
  margin-top: 2rem;
  text-decoration: none;
}
.container{
  position: absolute;
	margin-left: calc(100% - 94%);
	margin-top: calc(100% - 94%);
  max-width: 90%;
  max-height: 90%;
}
</style>
