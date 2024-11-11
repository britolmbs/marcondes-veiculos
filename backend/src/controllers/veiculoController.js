const fipeService = requiere('../services/fipeService');

const getVeiculo = async (req, res) => {
    const {tipo } = req.query;
    const { marcaId, modeloId, ano } = req.params;
    try {
        const veiculo = await fipeService.getVeiculo(tipo, marcaId, modeloId, ano);
        res.json(veiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAnos = async (req, res) => {
    const { tipo } = req.query;
    const { marcaId, modeloId } = req.params;
    try { 
        const anos = await fipeService.getAnos(tipo, marcaId, modeloId);
        res.json(anos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getVeiculo,
    getAnos
};