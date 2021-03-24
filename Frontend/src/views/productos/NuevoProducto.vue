<template>
  <div class="body">
      <br>
    <h1>Ingresar Producto</h1>
    <hr>
    <br>
    <form @submit.prevent="enviar(producto)" enctype="multipart/form-data">
      <div class="row justify-content-center">
        <img :src="hotImage.urlImagen" v-if="hotImage.urlImagen != null" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
          v-if="hotImage.urlImagen == null"
        />
        <br>
      </div>
      <div class="container cuerpo">
      <br/>
      <br/>
      <br/>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Nombre</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese el nombre del producto"
              v-model="producto.name"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Marca</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese la marca del producto"
              v-model="producto.marca"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Descripcion</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese la descripcion del producto"
              v-model="producto.descripcion"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Imagen</label>
            <br />
            <input
              type="file"
              name="img"
              @change="onFileChange"
              accept="image/*"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-4">
            <label>Precio de Compra</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese el precio de compra"
              v-model="producto.precioCompra"
            />
          </div>
          <div class="form-group col-md-4">
            <label>Precio de Venta</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese el precio de venta"
              v-model="producto.precioVenta"
            />
          </div>
          <div class="form-group col-md-4">
            <label>Cantidad</label>
            <input
              type="text"
              class="form-control"
              placeholder="Cantidad de productos a ingresar"
              v-model="producto.cantidad"
            />
          </div>
        </div>
        <br />
        <div class="row justify-content-between">
          <div class="form-group col-md-2">
            <button class="btn btn-block btn-danger">Cancelar</button>
          </div>
          <div class="form-group col-md-2 derecha">
            <button class="btn btn-block btn-success" type="submit">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "NuevoProducto",
  data() {
    return {
      producto: {
        name: "llanta negra",
        marca: "laquesea sa",
        descripcion: "llanta para moto",
        precioCompra: "300",
        precioVenta: "400",
        cantidad: "10",
        imagen: "",
      },
      hotImage: {
        urlImagen: null,
        imagen: null,
      },
    };
  },
  methods: {
    async enviar(producto) {
      try {
        let dataForm = new FormData();
        dataForm.append("img", this.hotImage.imagen);
        console.log(dataForm);
        axios
          .post("http://localhost:3000/api/imagen", dataForm, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            this.producto.imagen = `/storage/img/${response.data.filename}`;
            this.subirTodo(producto);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async subirTodo(producto) {
      try {
        const res = await axios
          .post("http://localhost:3000/api/product/", producto, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            this.repuestos = response.data;
            console.log(response.data);
            this.$router.push("/productos");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    onFileChange(event) {
      this.hotImage.imagen = event.target.files[0];
      //this.producto.imagen=`${fileData.name}`;
      this.hotImage.urlImagen = URL.createObjectURL(this.hotImage.imagen);
      console.log(this.hotImage.imagen);
    },
  },
  computed: {
    ...mapState(["token"]),
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
    margin-top: -3rem;
    border: solid 1px;
    border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .15);
  
  backdrop-filter: blur(5px);
}
.body{
    background: url(https://images.unsplash.com/photo-1544306094-e2dcf9479da3) no-repeat;
  background-size: cover;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
</style>
