<template>
<br>
<h1>Lista de Proveedores</h1>
<hr> <br>
  <div class="container p-4">
    <div class="row justify-content-center">
      <div class="col-md-3" v-for="repuesto in displayedRepuestos" :key="repuesto._id">
        <div class="card">
          <img v-bind:src="repuesto.imagen" class="card-img-top">
          <div class="card-body">
            <h5>{{repuesto.nombre}} {{repuesto.apellido}}</h5>
              <p>Correo: {{repuesto.correo}}</p>
              <p>Empresa: {{repuesto.empresa}}</p>
              <p>Contacto: {{repuesto.contacto}}</p>
              <!--<button >Detalles</button><br><br>-->
              <button class="btn btn-danger separar" @click="eliminarItem(repuesto._id)">eliminar</button>
              <router-link class="btn btn-success" v-bind:to="'/proveedor/edit/'+repuesto._id">editar</router-link>
            
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
import axios from 'axios'
export default {
    name:'Proveedor',
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
      await this.axios.get(`${this.baseURL}/proveedor`,{
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
      },
      async eliminarItem(id){
        try {
            await axios.delete(`${this.baseURL}/proveedor/${id}`,{
                    headers:{
                    'auth-token': this.token,
                    }
                }).then((response)=> {
                    this.producto=response.data
                    //console.log('eliminacion',response.data);
                    //console.log('repuestos antes:',this.repuestos);
                    for (let index = 1; index <= this.repuestos.length; index++) {
                      if (this.repuestos[index-1]._id==id) {
                        this.repuestos.pop(index)
                      }
                    }
                    //console.log('repuestos despues:',this.repuestos);
                }).catch((error)=>{
                console.log(error)
                });
        } catch (error) {
          
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
.separar{
  margin-right: 0.5rem;
}
.col-md-3{
  margin-bottom: 1rem;
}
</style>