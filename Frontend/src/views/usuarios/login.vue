<template>
 
      <br />
      <br />
      <br />
  <div class="container cuerpo">
    <form @submit.prevent="login(usuario)">
      <br />
      <div class="row">
        <div class="form-group col-md-12">
          <label>Usuario</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ingrese su usuarido"
            autocomplete="false"
            v-model="usuario.username"
          />
        </div>
      </div>
      <br /><br />
      <div class="row">
        <div class="form-group col-md-12">
          <label>Contraseña</label>
          <input
            type="password"
            class="form-control"
            placeholder="Ingrese su Contraseña"
            autocomplete="false"
            v-model="usuario.password"
          />
        </div>
      </div>
      <br /><br />
      <button type="submit" class="btn btn-primary">Iniciar sesion</button>
      <br /><br />
    </form>
  </div>
  {{ usuario }}
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      usuario: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>
<style scoped>
img {
  border: solid 1px;
  max-height: 15rem;
  max-width: 15rem;
  border-radius: 1rem;
  position: relative;
  z-index: 2;
}
.cuerpo{
    z-index: 1;
    border: solid 1px;
    border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  
  backdrop-filter: blur(5px);
}
.col-md-6,.col-md-4{
    margin-bottom: 1rem;
}
.col-md-2{
    max-width: 5rem;
    margin-bottom: 1rem;
    padding: 0rem;
    margin-left: 1rem;
}
.derecha{
    margin-right: 2rem;
}
.justify-content-center{
  max-width: 100%;
}
</style>
