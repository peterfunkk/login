const {verifyToken} = require('../Helpers/GenerateToken')
const Usuario = require('../Models/Usuario')

const checkRoleAuth = (roles) => async(req, res, next) => {
    try{
        const token = req.cookies.jwt || req.header('Autorization')?.replace('Bearer ', '');
        const tokenData = await verifyToken(token)
        const userData = await Usuario.findById(tokenData._id)

        if([].concat(roles).includes(userData.role)){
            next()
        }else {
            res.status(409)
            res.send({error: 'No tienes permisos'})
        }
    }catch(err) {
        console.log(err)
    }
}

module.exports = checkRoleAuth;