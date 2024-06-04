const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
  detalles: String,
  delivery: { type: Schema.Types.ObjectId, ref: 'Delivery' },
  carritoId: {type: Schema.Types.ObjectId, ref: 'Carrito'},
  usuarioId: {type: Schema.Types.ObjectId, ref: 'Usuario'},
  localId: {type: Schema.Types.ObjectId, ref: 'Local'}  // Relación con Repartidor
  // otros campos relevantes
});

module.exports = mongoose.model('Pedido', pedidoSchema);