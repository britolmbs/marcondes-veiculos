const express = require('express');
const router = express.Router();
const modeloController = require('../controllers/modeloController');

router.get('/:marcaId', modeloController.getModelos);

module.exports = router;