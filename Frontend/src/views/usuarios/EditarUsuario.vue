<template>
  <div class="body">
      <br>
    <h1>Actualizar Usuario</h1>
    <hr>
    <br>
    <form @submit.prevent="enviar(producto)" enctype="multipart/form-data">
      <div class="row justify-content-center">
        <img :src="producto.imagen" v-if="hotImage.urlImagen==null"/>
        <img :src="hotImage.urlImagen" v-if="hotImage.urlImagen != null" />
        <br>
      </div>
      <div class="container cuerpo">
      <br/>
      <br/>
      <br/>
        <div class="row">
          <div class="form-group col-md-12">
            <label>Nombre</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese su nombre"
              v-model="producto.name"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese su username"
              v-model="producto.username"
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
          <div class="form-group col-md-6">
            <label>Correo</label>
            <input
              type="email"
              class="form-control"
              placeholder="Ingrese su correo"
              v-model="producto.email"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Contraseña</label>
            <input
              type="password"
              class="form-control"
              placeholder="Ingrese su Contraseña"
              v-model="producto.password"
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
  props: ["id"],
  name: "EditarUsuario",
  data() {
    return {
      baseURL: 'https://backend-pieshna.herokuapp.com/api',
      producto: {
        name: "",
        username: "",
        email: "",
        password: "",
        imagen: "",
      },
      hotImage: {
        urlImagen: null,
        imagen: null,
      },
    };
  },
  created() {
    this.recibir(this.id);
  },
  methods: {
    async recibir(id) {
      try {
        console.log(`${this.baseURL}/user/${id}`);
        await axios
          .get(`${this.baseURL}/user/${id}`, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            this.producto = response.data;
          })
          .catch((error) => {
            console.log(error);
          });

        console.log("Usuario", this.producto);
      } catch (error) {
        console.log(error);
      }
    },
    async enviar(producto) {
      try {
        if(this.hotImage.urlImagen===null){
          console.log("no se cargo nueva imagen imagen");
          this.subirTodo(producto)
        }else{
        let dataForm = new FormData();
        dataForm.append("img", this.hotImage.imagen);
        console.log(dataForm);
        axios
          .post(`${this.baseURL}/imagen`, dataForm, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            this.producto.imagen = `/storage/img/${response.data.filename}`;
            this.subirTodo(producto);
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async subirTodo(producto) {
      try {
        const res = await axios
          .put(`${this.baseURL}/user/${this.id}`, producto, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            this.repuestos = response.data;
            console.log(response.data);
            this.$router.push("/usuarios");
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
.cuerpo {
  z-index: 1;
  margin-top: -3rem;
  border: solid 1px;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(5px);
}

.col-md-6,
.col-md-4 {
  margin-bottom: 1rem;
}
.col-md-2 {
  max-width: 5rem;
  margin-bottom: 1rem;
  padding: 0rem;
  margin-left: 1rem;
}
.derecha {
  margin-right: 2rem;
}
</style>
