const express = require('express');
const cors = require('cors');
const marcaRouter = require('./routes/marcaRoutes');
const modeloRouter = require('./routes/modeloRoutes');
const veiculoRouter = require('./routes/veiculoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/marca', marcaRouter);
app.use('/modelo', modeloRouter);
app.use('/veiculo', veiculoRouter);

module.exports = app;