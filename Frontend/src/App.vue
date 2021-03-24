<template>
  <nav
    id="nav"
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #e3f2fd;"
  >
    <div class="container-fluid">
      <router-link class="nav-link" to="/"
        ><a class="navbar-brand">Logo</a></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ">
          <li v-if="token != null" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/productos/agregar"
                  >Agregar Producto</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/productos"
                  >Productos</router-link
                >
              </li>
            </ul>
          </li>
          <li v-if="token != null" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Usuarios
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/productos/agregar"
                  >Agregar Usuario</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/productos"
                  >Usuarios</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" v-if="token === null"
              >Iniciar sesion</router-link
            >
            <a class="nav-link" v-if="token != null" @click="cerrarSesion"
              >Cerrar sesion</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["leerToken", "cerrarSesion"]),
  },
  created() {
    this.leerToken();
  },
  computed: {
    ...mapState(["token"]),
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
