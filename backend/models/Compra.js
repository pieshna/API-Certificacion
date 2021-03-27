const mongoose = require("mongoose");

const compraSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 6 },
  marca: {
    type: String,
    required: true,
    minlength: 2,
  },
  descripcion: {
    type: String,
    required: true,
    minlength: 6,
  },
  precioCompra: {
    type: String,
    required: true,
    minlength: 1,
  },
  precioVenta: {
    type: String,
    required: true,
    minlength: 1,
  },
  cantidad: {
    type: String,
    required: true,
    minlength: 1,
  },
  imagen: { 
      type: String,
       required: true,
        minlength: 6,
 },
  tempCantidad: { 
      type: String,
       required: true,
        minlength: 1,
 },
  newCantidad: { 
      type: String,
       required: true,
        minlength: 1,
 },
  proveedor: { 
      type: String,
       required: true,
        minlength: 1,
 },
  date: {
    type: Date,
    default: Date.now,
  },
  edited: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Compra", compraSchema);
