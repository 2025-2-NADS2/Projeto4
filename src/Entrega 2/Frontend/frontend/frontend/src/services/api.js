// frontend/src/services/api.js
import axios from 'axios';

// Lê a URL da API das variáveis de ambiente do VITE
// No deploy (Railway), esta será a sua URL pública
// No local (npm run dev), ele usará o 'localhost' como fallback
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export default api;