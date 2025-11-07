// frontend/src/services/api.js
import axios from 'axios';

// Define a URL base da sua API.
// Use a porta que funcionou para você (5000 ou 5001).
const api = axios.create({
    baseURL: 'http://localhost:5000/api' 
});

export default api;