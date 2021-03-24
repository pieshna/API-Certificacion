<template>
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
                <label>Imagen</label>
                <input type="text" class="form-control" placeholder="Ingrese la imagen del producto" v-model="producto.imagen">
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
            <button class="btn btn-block btn-danger">Cancelar</button>
            </div>
            <div class="form-group col-md-2">
            <button class="btn btn-block btn-success" type="submit">Agregar</button>
            </div>
        </div>
</template>
<script>
export default {
    name: 'FormProducto',
    props:['producto'],
    data() {
        return {
            producto: this.producto
        }
    },
}
</script>
<style>
    
</style>