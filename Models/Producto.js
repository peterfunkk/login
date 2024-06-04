const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
      },
      descripcion: {
        type: String,
        required: true
      },
      precio: {
        type: Number,
        required: true
      },
      categoria: {
        type: String,
        required: true
      },
      enCarrito: {
        type: Boolean,
        required: true,
        default: false
      },
      stock: {
        type: Number,
        default: 0
      },
      imagen: {
        type: String // URL de la imagen del producto
      }

})

// const Producto = mongoose.model('Producto', productoSchema);
module.exports = mongoose.model('Producto', productoSchema);