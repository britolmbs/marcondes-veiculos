const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/:marcaId/:modeloId/:ano', veiculoController.getVeiculo);

router.get('/:marcaId/:modeloId/anos', veiculoController.getAnos);

module.exports = router;