const Producto = require('../../Models/Producto')

const CrearProducto = async (req, res) => {
    try {
      const { nombre, descripcion, precio, categoria, stock, imagen } = req.body; // Extrae las propiedades del body
      const nuevoProducto = new Producto({
        nombre,
        descripcion,
        precio,
        categoria,
        stock,
        imagen
      });
      await nuevoProducto.save();
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

module.exports = CrearProducto;