<template>
  <br />
  <div class="row justify-content-end">
    <div class="col-md-3 separar">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Repuesto:</span>
        <input
          type="text"
          class="form-control"
          placeholder="Buscar repuesto"
          v-model="busqueda.item"
          @keyup="buscarItem"
        />
      </div>
    </div>
  </div>
  <h1>Lista de Compras</h1>
  <hr />
  <br />
  <div class="container p-4">
    <div class="row justify-content-center">
      <div class="container" v-if="repuestos.length == 0">
        <h1>No se encontro: {{ busqueda.item }}</h1>
      </div>
      <div
        class="col-md-3"
        v-for="repuesto in displayedRepuestos"
        :key="repuesto._id"
      >
        <div class="card">
          <img v-bind:src="repuesto.imagen" class="card-img-top" />
          <div class="card-body">
            <h5>{{ repuesto.proveedor }}-{{repuesto.edited}}</h5>

            <p>Descripcion: {{ repuesto.descripcion }}</p>
            <p>Marca: {{ repuesto.marca }}</p>
            <p>Cantidad: {{ repuesto.cantidad }}</p>
            <p>Precio de Compra: {{ repuesto.precioCompra }}</p>
            <p>Proveedor: {{ repuesto.proveedor }}</p>
            <p>Hecha en: {{ repuesto.edited }}</p>
            <!--<button >Detalles</button><br><br>-->
            <button class="btn btn-success" @click="descargar(repuesto.edited)">Descargar</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- Paginacion -->
    <div class="row justify-content-center">
      <div class="btn-group col-md-2">
        <button
          type="button"
          v-if="page != 1"
          @click="page--"
          class="btn btn-sm btn-outline-secondary"
        >
          Anterior
        </button>
        <button
          type="button"
          @click="page = Numerodepagina"
          v-for="Numerodepagina in pages.slice(page - 1, page + 5)"
          :key="Numerodepagina"
          class="btn btn-sm btn-outline-secondary"
        >
          {{ Numerodepagina }}
        </button>
        <button
          type="button"
          v-if="page < pages.length"
          @click="page++"
          class="btn btn-sm btn-outline-secondary"
        >
          Siguiente
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"
export default {
  name: "VerCompras",
  data() {
    return {
      busqueda: {
        item: "",
        setTimeout: "",
        noRepuesto: "",
      },
      repuestos: [],
      auxRepuestos: [],
      baseURL: "https://backend-pieshna.herokuapp.com/api",
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  created() {
    this.getRepuestos();
  },
  methods: {
    async getRepuestos() {
      await this.axios
        .get(`${this.baseURL}/compra`, {
          headers: {
            "auth-token": this.token,
          },
        })
        .then((response) => {
          console.log('respuesta axios',response.data);
          let elementos=[],arrayAux=response.data[0],proveedores=[],arrarProv=response.data[1]
          for (let i = 0; i < arrayAux.length; i++) {
            let proveedorId=arrayAux[i].proveedor.split(',')
            //console.log('idProv',proveedorId);
            for (let a = 0; a < arrarProv.length; a++) {
              if (proveedorId[0]==arrarProv[a]._id) {
                proveedores.push(arrarProv[a].nombre)
              }
              
            }
            let item={
              name:arrayAux[i].name,
              descripcion:arrayAux[i].descripcion,
              marca:arrayAux[i].marca,
              cantidad:arrayAux[i].tempCantidad,
              precioCompra:arrayAux[i].precioCompra,
              proveedor:proveedores[i],
              imagen:arrayAux[i].imagen,
              edited:arrayAux[i].edited
            }
            elementos.push(item)
          }
          this.repuestos=elementos
          this.auxRepuestos = this.repuestos;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    paginate(repu) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return repu.slice(from, to);
    },
    setRepuestos() {
      let numerodepaginas = Math.ceil(this.repuestos.length / this.perPage);
      for (let index = 1; index <= numerodepaginas; index++) {
        this.pages.push(index);
      }
    },
    async eliminarItem(id) {
      try {
        await axios
          .delete(`${this.baseURL}/product/${id}`, {
            headers: {
              "auth-token": this.token,
            },
          })
          .then((response) => {
            this.producto = response.data;
            //console.log('eliminacion',response.data);
            //console.log('repuestos antes:',this.repuestos);
            for (let index = 1; index <= this.repuestos.length; index++) {
              if (this.repuestos[index - 1]._id == id) {
                this.repuestos.pop(index);
              }
            }
            //console.log('repuestos despues:',this.repuestos);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {}
    },
    //seccion de busqueda
    buscarItem() {
      if (this.busqueda.item != "") {
        clearTimeout(this.busqueda.setTimeout);

        this.busqueda.setTimeout = setTimeout(() => {
          this.repuestos = this.auxRepuestos;
          const valor = this.repuestos.filter((item) => {
            this.pages = [];
            return item.name
              .toLowerCase()
              .includes(this.busqueda.item.toLowerCase());
          });
          this.repuestos = valor;
        }, 300);
      } else {
        this.repuestos = this.auxRepuestos;
      }
    },
    
    descargar(id){
      var elemento
      for (let i = 0; i < this.repuestos.length; i++) {
        if(this.repuestos[i].edited==id){
          elemento = this.repuestos[i];
        }
      }
      let fecha=id.split('T');
      let format=fecha[0].split('-')
      let nuevafecha=`${format[2]}-${format[1]}-${format[0]}`
      
      let body=[]
      let sname=elemento.name.split(',')
      let sdesc=elemento.descripcion.split(',')
      let smarca=elemento.marca.split(',')
      let scantidad=elemento.cantidad.split(',')
      let spc=elemento.precioCompra.split(',')
      for (let i = 0; i < sname.length; i++) {
        body.push([sname[i],sdesc[i],smarca[i],scantidad[i],spc[i],parseInt(scantidad[i],10)*parseInt(spc[i],10)])
        
      }
      console.log('body:',body);

      let doc = new jsPDF();
      doc.text('comprobante de compra',10,30);
      doc.text(`Fecha: ${nuevafecha}`,10,40)
      doc.text(`Proveedor: ${elemento.proveedor}`,10,50)
      doc.line(0,55,400,55);
      autoTable(doc,{
        head:[['nombre','descripcion','marca','cantidad','precio/unidad','total']],
        margin:{top:60},
        body
      })
      doc.save(`Compra-${nuevafecha}-${fecha[1]}.pdf`);
    }
  },
  computed: {
    ...mapState(["token"]),
    displayedRepuestos() {
      return this.paginate(this.repuestos);
    },
  },
  watch: {
    repuestos() {
      this.setRepuestos();
    },
  },
};
</script>

<style scoped>
.card {
  background-color: white;
}
.card-img-top {
  margin: auto;
  height: 10rem;
  width: 10rem;
}
.card-body {
  background-color: rgb(231, 231, 231);
  text-align: center;
}
.separar {
  margin-right: 0.5rem;
}
.col-md-3 {
  margin-bottom: 1rem;
}
</style>
