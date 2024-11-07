const axios = require('axios');
const cache = require('../utils/cache');

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1';

const getMarcas = async (tipo = 'carros') => {
    const cacheKey = `marcas_${tipo}`;
    const cached = cache.get(cacheKey);
    if (chached) return cached;

    const response = await axios.get(`${BASE_URL}/${tipo}/marcas`);
    cache.set(cacheKey, response.data, 3600);
    return response.data;
};

const getModelos = async (tipo = 'carros', marcaId) => {
    const cacheKey = `modelos_${tipo}_${marcaId}`;
    const cached = cache.get(cacheKey);
    if (cached) return cached;
}
