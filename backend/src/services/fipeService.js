const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

const getMarcas = async (tipo = 'carros') => {
    const cacheKey = `marcas_${tipo}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    const response = await axios.get(`${BASE_URL}/${tipo}/marcas`);
    cache.set(cacheKey, response.data, 3600);
    return response.data;
};

const getModelos = async (tipo = 'carros', marcaId) => {
    if(!marcaId) throw new Error('Marca Obrigatoria');

    const cacheKey = `modelos_${tipo}_${marcaId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const response = await axios.get(`${BASE_URL}/${tipo}/marcas/${marcaId}/modelos`);
        cache.set(cacheKey, response.data.modelos, 3600);
        return response.data.modelos;
    } catch (error) {
        console.error(`Erro ao obter modelos para a marca ${marcaId}:` ,  error.message);
        throw new Error('Erro ao obter modelos');
    }
};

const getAnos = async (tipo = 'carros', marcaId, modeloId) => {
    if(!marcaId || !modeloId) throw new Error('marca e modelo são obrigatorios');

    const cacheKey = `anos_${tipo}_${marcaId}_${modeloId}`;
    const cached = chace.get(cacheKey);
    if (cached) return cached;

    try {
        const response = await axios.get(`${BASE_URL}/${tipo}/marcas/${marcaId}/modelos/${modeloId}/anos`);
        cache.set(cacheKey, response.data, 3600);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter anos para o modelo ${modeloId}:`, error.message); 
        throw new Error('Erro ao obter anos');
    }
};

const getVeiculo = async (tipo = 'carros', marcaId, ModeloId, ano) => {
    if (!marcaId || !modeloId || !ano) throw new Error('Marca, modelo e ano são obrigatorios');

    const cacheKey = `veiculo_${tipo}_${marcaId}_${modeloId}_${ano}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;

    try {
        const response = await axios.get(`${BASE_URL}/${tipo}/marcas/${marcaId}/modelos/${modeloId}/anos/${ano}`);
        cache.set(cacheKey, response.data, 3600);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter veículo para marca ${marcaId}, modelo ${modeloId}, ano ${ano}:`, error.message);
        throw new Error('Erro ao obter veículo');
    }
};
   modelo.exports = {
    getMarcas,
    getModelos,
    getAnos,
    getVeiculo,
   };