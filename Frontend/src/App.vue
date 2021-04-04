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
          <li><router-link class="nav-link" to="/ventas">Ventas</router-link></li>
          <li><router-link class="nav-link" to="/compras">Compras</router-link></li>
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
              Proveedores
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/proveedor/agregar"
                  >Nuevo Proveedor</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/proveedor"
                  >Proveedores</router-link
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
                <router-link class="dropdown-item" to="/usuarios/agregar"
                  >Agregar Usuario</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/usuarios"
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
              >Cerrar sesion</a>
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

body{
  background: rgba(217,217,217,1);
background: -moz-linear-gradient(-45deg, rgba(217,217,217,1) 0%, rgba(209,132,169,1) 12%, rgba(230,25,175,1) 23%, rgba(191,96,196,1) 46%, rgba(158,110,230,1) 61%, rgba(127,148,240,1) 81%, rgba(143,207,227,1) 100%);
background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(217,217,217,1)), color-stop(12%, rgba(209,132,169,1)), color-stop(23%, rgba(230,25,175,1)), color-stop(46%, rgba(191,96,196,1)), color-stop(61%, rgba(158,110,230,1)), color-stop(81%, rgba(127,148,240,1)), color-stop(100%, rgba(143,207,227,1)));
background: -webkit-linear-gradient(-45deg, rgba(217,217,217,1) 0%, rgba(209,132,169,1) 12%, rgba(230,25,175,1) 23%, rgba(191,96,196,1) 46%, rgba(158,110,230,1) 61%, rgba(127,148,240,1) 81%, rgba(143,207,227,1) 100%);
background: -o-linear-gradient(-45deg, rgba(217,217,217,1) 0%, rgba(209,132,169,1) 12%, rgba(230,25,175,1) 23%, rgba(191,96,196,1) 46%, rgba(158,110,230,1) 61%, rgba(127,148,240,1) 81%, rgba(143,207,227,1) 100%);
background: -ms-linear-gradient(-45deg, rgba(217,217,217,1) 0%, rgba(209,132,169,1) 12%, rgba(230,25,175,1) 23%, rgba(191,96,196,1) 46%, rgba(158,110,230,1) 61%, rgba(127,148,240,1) 81%, rgba(143,207,227,1) 100%);
background: linear-gradient(135deg, rgba(217,217,217,1) 0%, rgba(209,132,169,1) 12%, rgba(230,25,175,1) 23%, rgba(191,96,196,1) 46%, rgba(158,110,230,1) 61%, rgba(127,148,240,1) 81%, rgba(143,207,227,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d9d9d9', endColorstr='#8fcfe3', GradientType=1 );
}

</style>
