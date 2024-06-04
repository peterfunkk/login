const Producto = require('../../Models/Producto')

const ObtenerProductos = async (req, res) => {
    const productos = await Producto.find();    
    if(productos){
        res.render('ProductosVista', {productos})
    }else {
        res.json({mensaje: "No hay productos"})
    }
};

module.exports = ObtenerProductos;