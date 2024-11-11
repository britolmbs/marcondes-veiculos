const express = require('express');
const cors = require('cors');
const marcaRouter = require('./routers/marcaRouter');
const modeloRouter = require('./routers/modeloRouter');
const veiculoRouter = require('./routers/veiculoRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/marca', marcaRouter);
app.use('/modelo', modeloRouter);
app.use('/veiculo', veiculoRouter);

module.exports = app;