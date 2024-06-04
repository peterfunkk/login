const Usuario = require('../../Models/Usuario');
const { encrypt, compare } = require('../../Helpers/HandleBycript');
const {tokenSign} = require('../../Helpers/GenerateToken')

const loginCtrl = async (req, res) => {
    const { contrasena, usuario } = req.body;

    try {
        // Find the user by email

        const usuarioFind = await Usuario.findOne({ usuario: usuario })

        if (!usuarioFind){
            return res.status(404).json({ mensaje: "usuario incorrecto o no registrado" })
        }

        // Compare the provided password with the stored hashed password
        const passwordCompare = await compare(contrasena, usuarioFind.contrasena);

        // If the passwords do not match, return a 404 error
        if (!passwordCompare) {
            return res.status(404).json({ mensaje: "contrasena incorrecta" });
        }

        const token = tokenSign(usuarioFind)
        // const setcookie = await setCookie(token);
        res.cookie('jwt', token, {httpOnly: true, maxAge: 3600000})
        // If both email and password are correct, return the user data
        return res.json(token);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = loginCtrl;