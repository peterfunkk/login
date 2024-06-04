const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
  productos: [{
    producto: { type: Schema.Types.ObjectId, ref: 'Producto' },
    cantidad: { type: Number, default: 1}
  }],
  total: Number
});

// const Carrito = mongoose.model('Carrito', carritoSchema);
module.exports = mongoose.model('Carrito', carritoSchema);