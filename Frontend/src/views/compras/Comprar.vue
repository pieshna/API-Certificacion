<template>
  <div class="body">
    <br />
    <h1>Comprar Producto</h1>
    <hr />
    <br />
    <form @submit.prevent="" enctype="multipart/form-data">
      <div class="row justify-content-center">
        <img :src="tempProducto.imagen" v-if="tempProducto.imagen!=null" />
        <br />
      </div>
      <div class="container cuerpo">
        <br />
        <br />
        <br />
        <div class="row">
          <div class="form-group col-md-6">
            <label>Producto</label>
            <select class="form-select" v-model="producto._id" @change="actualizador">
              <option disabled selected>Seleccione un producto</option>
              <option
                v-for="option in producto"
                v-bind:value="option._id"
                :key="option._id"
              >
                {{ option.name}} - {{option.marca}}
              </option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label>Cantidad actual</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese la marca del producto"
              v-model="tempProducto.cantidad"
              disabled
            />
          </div>
          <div class="form-group col-md-3">
            <label>Precio de Compra</label>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese el precio de compra"
              v-model="tempProducto.precioCompra"
            />
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Descripcion</label>
            <textarea class="form-control" v-model="tempProducto.descripcion" rows="3" disabled></textarea>
          </div>
          <div class="form-group col-md-6" v-if="carrito[0]!=null">
            <label>Productos a Comprar</label>
            <ul><li v-for="carro in carrito" v-bind:key="carro._id">{{carro.name}}-{{carro.tempCantidad}}</li></ul>
          </div>
          </div>
        <div class="row">

          <div class="form-group col-md-3">
            <label>Cantidad a comprar</label>
            <input
              type="number"
              class="form-control"
              placeholder="Cantidad de productos a ingresar"
              v-model="tempProducto.tempCantidad"
              @change="calcular"
              min="1"
            />
          </div>
          <div class="form-group col-md-3" v-if="tempProducto.tempCantidad!=0">
            <label>Nueva cantidad</label>
            <input
              type="text"
              class="form-control"
              v-model="tempProducto.newCantidad" disabled
            />
          </div>
          <div class="form-group col-md-6">
            <label>Proveedor</label>
            <select class="form-select" v-model="proveedor._id" @change="ponerProveedor">
              <option disabled selected>Seleccione un Proveedor</option>
              <option
                v-for="option in proveedor"
                v-bind:value="option._id"
                :key="option._id"
              >
                {{ option.nombre}} - {{option.empresa}}
              </option>
            </select>
          </div>
          
        </div>
        <br />
        <div class="row justify-content-between">
          <div class="form-group col-md-2">
            <router-link to="/">
              <button class="btn btn-block btn-danger">
                Cancelar
              </button></router-link
            >
          </div>
          <div class="form-group col-md-2">
              <button class="btn btn-block btn-primary" @click="mostrar">
                +
              </button>
          </div>
          <div class="form-group col-md-2 derecha">
            <button class="btn btn-block btn-success" @click="enviar">
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
  name: "Compras",
  data() {
    return {
      baseURL: "https://backend-pieshna.herokuapp.com/api",
      producto: {
        _id: "",
        name: "",
        marca: "",
        descripcion: "",
        precioCompra: "",
        precioVenta: "",
        cantidad: "",
        imagen: "",
      },
      tempProducto:{
        _id: "",
        name: "",
        marca: "",
        descripcion: "",
        precioCompra: "",
        precioVenta: "",
        cantidad: "",
        imagen: "",
        tempCantidad:"",
        newCantidad:"",
        proveedor:""
      },
      carrito:[],
      proveedor: {},
      hotImage: {
        urlImagen: null,
        imagen: null,
      },
    };
  },
  created() {
    this.recibir();
  },
  methods: {
    async recibir() {
      try {
        //console.log(id);
        await axios
          .get(`${this.baseURL}/product`, {
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
        await axios
          .get(`${this.baseURL}/proveedor`, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            this.proveedor = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    mostrar(){
      console.log('mostrando');
      this.carrito.push(this.tempProducto)
      console.log('carrito:',this.carrito);
    },
    async enviar() {
      try {
        let name,marca,descripcion,precioCompra,precioVenta,cantidad,imagen
        for (let i = 0; i < this.carrito.length; i++) {
          name=this.carrito[i].name;
          marca=this.carrito[i].marca;
          descripcion=this.carrito[i].descripcion;
          precioCompra=this.carrito[i].precioCompra;
          precioVenta=this.carrito[i].precioVenta;
          cantidad=this.carrito[i].newCantidad.toString();
          imagen=this.carrito[i].imagen;
          let res = await axios
          .put(`${this.baseURL}/product/${this.carrito[i]._id}`, {
            name,marca,descripcion,precioCompra,precioVenta,cantidad,imagen,
          }, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            console.log(response.data);
            
              
            
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(res);
        }
        console.log('generamoscompra');
              this.generarCompra()
      } catch (error) {
        console.log(error);
      }
    },
    async generarCompra() {
      let name=[],marca=[],descripcion=[],precioCompra=[],precioVenta=[],cantidad=[],imagen=[],tempCantidad=[],newCantidad=[],proveedor=[]
      for (let i = 0; i < this.carrito.length; i++) {
          name.push(this.carrito[i].name);
          marca.push(this.carrito[i].marca);
          descripcion.push(this.carrito[i].descripcion);
          precioCompra.push(this.carrito[i].precioCompra);
          precioVenta.push(this.carrito[i].precioVenta);
          cantidad.push(this.carrito[i].newCantidad.toString());
          imagen.push(this.carrito[i].imagen);
          tempCantidad.push(this.carrito[i].tempCantidad);
          newCantidad.push(this.carrito[i].newCantidad);
          proveedor.push(this.carrito[i].proveedor);
      }
      try {
        console.log('enviamos a backend',{
          name,marca,descripcion,precioCompra,precioVenta,cantidad,imagen,tempCantidad,newCantidad,proveedor,
        });
        const res = await axios
          .post(`${this.baseURL}/compra/`, {
            name,marca,descripcion,precioCompra,precioVenta,cantidad,imagen,tempCantidad,newCantidad,proveedor,
          }, {
            headers: {
              "auth-token": this.token,
            },
          }).then((response) => {
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    actualizador(){
      let valores= setTimeout(() => {
          const valor = this.producto.filter((item) => {
            return item._id
              .includes(this.producto._id);
          });
          
          this.tempProducto=valor[0]
        }, 300);
    },
    ponerProveedor(){
      let valores= setTimeout(() => {
          const valor = this.proveedor.filter((item) => {
            return item._id
              .includes(this.proveedor._id);
          });
          for (let i = 0; i < this.carrito.length; i++) {
            this.carrito[i].proveedor=valor[0]._id;
            
          }
      console.log('proveedor actualizado', this.tempProducto.proveedor);
        }, 300);
    },
    calcular(){
      this.tempProducto.newCantidad= parseInt(this.tempProducto.cantidad)
       + parseInt(this.tempProducto.tempCantidad) 
      
    }
  },
  computed: {
    ...mapState(["token"]),
  },
};
</script>
<style scoped>
img {
  margin-left: 1rem;
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
.justify-content-center{
  max-width: 99%;
}
</style>
