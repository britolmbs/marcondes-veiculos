 const fipeService = require('../services/fipeService');

 const getModelos = async (req, res) => {
    const { tipo } = req.query;
    const { marcaId } = req.params;
    try {
        const modelos = await fipeService.getModelos(tipo, marcaId);
        res.json(modelos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 };

 module.exports = {
    getModelos,
 };