const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        apellido: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        direccion:{
            calle: {
                type: String,
                required: [true, 'La calle es obligatoria'],
                trim: true,
              },
              numero: {
                type: String,
                required: [true, 'El número es obligatorio'],
                trim: true,
              },
              ciudad: {
                type: String,
                required: [true, 'La ciudad es obligatoria'],
                trim: true,
              },

        }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Cliente', ClienteSchema);