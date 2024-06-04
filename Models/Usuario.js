const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usuario: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {type: String, default: 'user'}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);