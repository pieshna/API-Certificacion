const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    marca: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    descripcion: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    precioCompra: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    precioVenta: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    cantidad: {
        type: String,
        required: true,
        minlength: 1
    },
    imagen: {
        type: String,
        required: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    edited: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);