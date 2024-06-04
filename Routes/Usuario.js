const express = require('express');
const router = express.Router();
const { registroCtrl, loginCtrl } = require('../Controllers/Usuario')

router.post('/registro', registroCtrl);

router.post('/login', loginCtrl);

router.get('/login', (req, res) => {
    res.render('UsuarioVista')
})

router.get('/', (req, res) => {
    res.render('UsuarioRegistro')
})


module.exports = router;