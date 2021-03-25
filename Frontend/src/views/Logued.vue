<template>
  <div class="home">
    <br><br>
    <h1>Bienvenido</h1>
    <div class="container">
      <div class="row justify-content-center">
          <router-link to="/productos" class="col-md-3">
        <div>
          <span>Repuestos</span><br>
          <img src="https://www.flaticon.es/svg/vstatic/svg/627/627495.svg?token=exp=1616666349~hmac=6ec087d896860cd807c0dd61c2e5f9a2">
        </div>
          </router-link>
          <router-link to="/usuarios" class="col-md-3">
        <div>
          <span>Usuarios</span><br>
          <img src="https://www.flaticon.es/svg/vstatic/svg/560/560216.svg?token=exp=1616666180~hmac=741f5e82494db716dc93082c65d473e8">
        </div>
          </router-link>
          <router-link to="/proveedor" class="col-md-3">
        <div>
          <span>Proveedores</span><br>
          <img src="https://www.flaticon.es/svg/vstatic/svg/2942/2942322.svg?token=exp=1616666059~hmac=5bdf3c76b44ea199d1affa7215d883ea">
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
