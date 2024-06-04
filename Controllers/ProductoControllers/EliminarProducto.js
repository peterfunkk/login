const Producto = require('../../Models/Producto')

const EliminarProducto = async (req, res) => {
    try {
      const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
      if (!productoEliminado) return res.status(404).json({ error: 'Producto no encontrado' });
      res.status(200).json({ mensaje: 'Producto eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = EliminarProducto;