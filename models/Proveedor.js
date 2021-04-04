const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    apellido: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    correo: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    empresa: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    contacto: {
        type: String,
        required: true,
        min: 1,
        max: 255
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

module.exports = mongoose.model('Proveedor', proveedorSchema);