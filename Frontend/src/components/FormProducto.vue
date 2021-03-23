<template>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label>Nombre</label>
            <input type="text" class="form-control" name="nombre" placeholder="Ingrese el nombre del producto"
            v-model="nombre">
        </div>
    </div>
</template>
<script>
export default {
    name: 'FormProducto',
    props:{
        id: String
    }
}
</script>
<style>
    
</style>