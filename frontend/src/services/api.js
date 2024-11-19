
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const getMarcas = () => axios.get(`${API_BASE_URL}/marcas`);
export const getModelos = (marcaId) => axios.get(`${API_BASE_URL}/modelos?marcaId=${marcaId}`);
export const getVeiculo = (modeloId) => axios.get(`${API_BASE_URL}/veiculos?modeloId=${modeloId}`);