<template>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label>Nombre</label>
            <input type="text" class="form-control" placeholder="Ingrese el nombre del producto" v-model="nombre">
        </div>
    </div>
    {{producto}}
</template>
<script>
export default {
    name: 'FormProducto',
    props:{
        id: String
    },
    data() {
        return {
            producto:{
                nombre:''
            }
        }
    },
}
</script>
<style>
    
</style>