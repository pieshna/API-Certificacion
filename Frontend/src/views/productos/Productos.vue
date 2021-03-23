<template>
<br>
<h1>Lista de Productos</h1>
{{token}}
<hr> <br>
  <div class="container p-4">
    <div class="row justify-content-center">
      <div class="col-md-3" v-for="repuesto in displayedRepuestos" :key="repuesto._id">
        <div class="card">
          <img v-bind:src="repuesto.imagen" class="card-img-top">
          <div class="card-body">
            <h5>{{repuesto.nombre}}</h5>
            
              <p>Descripcion: {{repuesto.descripcion}}</p> 
              <p>Marca: {{repuesto.marca}}</p>
              <p>Cantidad: {{repuesto.cantidad}}</p>
              <p>Precio: {{repuesto.precio}}</p>
              <p>Precio de Compra: {{repuesto.precioCompra}}</p>
            
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- Paginacion -->
    <div class="row justify-content-center">
      <div class="btn-group col-md-2">
        <button type="button"
        v-if="page != 1" @click="page--"
         class="btn btn-sm btn-outline-secondary">Anterior</button>
        <button type="button" @click="page=Numerodepagina"
        v-for="Numerodepagina in pages.slice(page-1,page+5)" :key="Numerodepagina"
        class="btn btn-sm btn-outline-secondary">
        {{Numerodepagina}}
        </button>
        <button type="button"
        v-if="page < pages.length" @click="page++"
         class="btn btn-sm btn-outline-secondary">Siguiente</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
    name:'Productos',
  data(){
    return{ 
      repuestos: [],
      baseURL: 'http://localhost:3000/api',
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  created(){
    this.getRepuestos();
  },
  methods: {
    async getRepuestos(){
      await this.axios.get(`${this.baseURL}/product`,{
        headers:{
          'auth-token': this.token
        }
      })
      .then((response)=> {
        this.repuestos=response.data
        console.log(response.data)
      })
      .catch((error)=>{
        console.log(error)
      });
    },
      paginate(repu){
        let page=this.page;
        let perPage=this.perPage;
        let from = (page*perPage)-perPage;
        let to=(page*perPage);
        return repu.slice(from,to)
        
      },
      setRepuestos(){
        let numerodepaginas=Math.ceil(this.repuestos.length/this.perPage);
        for (let index = 1; index <= numerodepaginas; index++) {
          this.pages.push(index)
        }
      }
  },
  computed:{
    ...mapState(['token']),
    displayedRepuestos(){
      return this.paginate(this.repuestos);
      }
  },
  watch:{
    repuestos(){
      this.setRepuestos();
    }
  }
}
</script>

<style scoped>
.card{
  background-color: white;
}
.card-img-top{
  margin: auto;
  height: 10rem;
  width: 10rem;
}
.card-body{
  background-color: rgb(231, 231, 231);
  text-align: center;
}
</style>