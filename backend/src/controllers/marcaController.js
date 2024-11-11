const fipeService = require('.../services/fipeService');

const getMarcas = async (req, res) => {
        const { tipo } = req.query;
        try{
            const marcas = await fipeService.getMarcas(tipo);
            res.json(marcas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    module.exports = {
        getMarcas,
    };
