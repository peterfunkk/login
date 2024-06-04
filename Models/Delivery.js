const mongoose = require('mongoose');
const Pedido = require("./Pedido");

const Delivery = new mongoose.Schema({
    nombre:{type: String, require: true},
    apellido: {type: String, require: true},
    pedido: {type: Boolean, require: true}
});


module.exports = Delivery;