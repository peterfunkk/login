const Producto = require('../../Models/Producto')

const ObtenerProductoPorId = async (req, res) => {
    try {
      const producto = await Producto.findById(req.params.id);
      if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
      res.render('ProductoVista', producto);
    } catch (error) {
      res.status  (500).json({ error: error.message });
    }
};

module.exports = ObtenerProductoPorId;