const Producto = require('../../Models/Producto')

const ActualizarProducto = async (req, res) => {
    try {
      const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!productoActualizado) return res.status(404).json({ error: 'Producto no encontrado' });
      res.status(200).json(productoActualizado);
    } catch (error) {
      res.status(500).json({ error: error.message })
      console.error(error);
    }
  };

module.exports = ActualizarProducto;