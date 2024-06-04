const express = require('express');
const router = express.Router();
const {
    ObtenerProductos,
    CrearProducto, 
    ActualizarProducto,
    ObtenerProductoPorId, 
    EliminarProducto
} = require('../Controllers/ProductoController');
const auth = require('../Middleware/auth');
const checkRoleAuth = require('../Middleware/checkRoleAuth')


// Obtener todos los productos
router.get('/', auth, checkRoleAuth(['user']), ObtenerProductos);

// Crear un nuevo producto
router.post('/', CrearProducto);

// Obtener un producto por ID
router.get('/:id', ObtenerProductoPorId);

// Actualizar un producto por ID
router.put('/:id', ActualizarProducto);

// Eliminar un producto por ID
router.delete('/:id', EliminarProducto);

module.exports = router;
