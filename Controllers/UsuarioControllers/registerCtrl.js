const Usuario = require('../../Models/Usuario')
const {encrypt, compare} = require('../../Helpers/HandleBycript')

const registroCtrl = async (req, res) => {
    try {
        const { email, contrasena, usuario } = req.body
        const passwordHash = await encrypt(contrasena);
        const nuevoUsuario = new Usuario({
            usuario,
            contrasena: passwordHash,
            email
        })
        await nuevoUsuario.save()
        res.status(201).json(nuevoUsuario)

    }catch(err){
        res.send(err)
    }
}




module.exports = registroCtrl;