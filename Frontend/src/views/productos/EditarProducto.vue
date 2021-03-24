<template>
<br>
    <div class="container">
        <h1>Editar Producto</h1>
        <hr>
        <br>
        <form @submit.prevent="enviar(producto)">
            <div class="row">
                <div class="form-group col-md-6">
                    <label>Nombre</label>
                    <input type="text" class="form-control" placeholder="Ingrese el nombre del producto" v-model="producto.name">
                </div>
                <div class="form-group col-md-6">
                    <label>Marca</label>
                    <input type="text" class="form-control" placeholder="Ingrese la marca del producto" v-model="producto.marca">
                </div>
            </div>
        <div class="row">
            <div class="form-group col-md-6">
                <label>Descripcion</label>
                <input type="text" class="form-control" placeholder="Ingrese la descripcion del producto" v-model="producto.descripcion">
            </div>
            <div class="form-group col-md-6">
                <img :src="hotImage.urlImagen" v-if="hotImage.urlImagen!=null">
                <img :src="producto.imagen" v-if="hotImage.urlImagen===null">
                <br>
                <label>Imagen</label>
                <br>
                <input type="text" v-model="producto.imagen" hidden>
                <input type="file" name="img" @change="onFileChange" accept="image/*">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-4">
                <label>Precio de Compra</label>
                <input type="text" class="form-control" placeholder="Ingrese el precio de compra" v-model="producto.precioCompra">
            </div>
            <div class="form-group col-md-4">
                <label>Precio de Venta</label>
                <input type="text" class="form-control" placeholder="Ingrese el precio de venta" v-model="producto.precioVenta">
            </div>
            <div class="form-group col-md-4">
                <label>Cantidad</label>
                <input type="text" class="form-control" placeholder="Cantidad de productos a ingresar" v-model="producto.cantidad">
            </div>
        </div>
        <br>
        <div class="row justify-content-between">
            <div class="form-group col-md-2">
                <router-link to="/productos" class="btn btn-block btn-danger">Cancelar</router-link>
            </div>
            <div class="form-group col-md-2">
            <button class="btn btn-block btn-success" type="submit">Guardar</button>
            </div>
        </div>
        </form>
    </div>
        
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    props:['id'],
    name:'EditarProducto',
    data() {
        return {
            producto:{
                name:'',
                marca:'',
                descripcion:'',
                precioCompra:'',
                precioVenta:'',
                cantidad:'',
                imagen:''
            },
            hotImage:{
                urlImagen:null,
                imagen:null
            }
        }
    },
    created() {
        this.recibir(this.id)
    },
    methods: {
        async recibir(id){
            try {
                //console.log(id);
                await axios.get(`http://localhost:3000/api/product/${id}`,{
                    headers:{
                    'auth-token': this.token,
                    }
                }).then((response)=> {
                    this.producto=response.data
                }).catch((error)=>{
                console.log(error)
                });
                
                console.log('Producto',this.producto);
            } catch (error) {
                console.log(error);
            }
        },
        async enviar(producto){
        try {
            let dataForm=new FormData();
                dataForm.append('img',this.hotImage.imagen)
                console.log(dataForm);
                axios.post('http://localhost:3000/api/imagen',dataForm,{
                    headers:{
                        'auth-token': this.token,
                    }
                }).then((response)=>{
                    this.producto.imagen=`/storage/img/${response.data.filename}`;
                    this.subirTodo(producto)
                })
            } catch (err) {
                console.log(err);
            }
        },
        async subirTodo(producto){
            try {
                const res=await axios.put(`http://localhost:3000/api/product/${this.id}`,producto,{
                    headers:{
                    'auth-token': this.token,
                    }
                }).then((response)=> {
                    this.repuestos=response.data
                    console.log(response.data)
                    this.$router.push("/productos")
                }).catch((error)=>{
                    console.log(error)
                });
                console.log(res);
                
                } catch (error) {
                    console.log(error);
                }
        },
        onFileChange(event){
            this.hotImage.imagen =  event.target.files[0];
            //this.producto.imagen=`${fileData.name}`;
            this.hotImage.urlImagen=URL.createObjectURL(this.hotImage.imagen)
            console.log(this.hotImage.imagen);
        }
    },
    computed:{
        ...mapState(['token'])
    }
    
}
</script>
<style scoped>
img{
    width: 10rem;
    height: 10rem;
}
</style>