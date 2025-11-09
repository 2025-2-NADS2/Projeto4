// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Importa o controlador que acabamos de criar
const authController = require('../controllers/authController');

// Define a rota POST para registrar
// URL: POST /api/auth/register
router.post('/register', authController.register);

// Define a rota POST para logar
// URL: POST /api/auth/login
router.post('/login', authController.login);

// Exporta o roteador para o server.js usar
module.exports = router;