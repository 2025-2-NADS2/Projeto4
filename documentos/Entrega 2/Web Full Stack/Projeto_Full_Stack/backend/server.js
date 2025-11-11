// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Conexão com o Banco de Dados
require('./database/db.js'); 

// Rota de Teste da API
app.get('/api/status', (req, res) => {
    res.json({ status: 'API está online e funcionando!' });
});

// ===============================================
// CARREGAR ROTAS
// ===============================================

// Rotas de Autenticação
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Rotas Protegidas (Ex: /api/protegido/dados)
const protectedRoutes = require('./routes/protectedRoutes');
app.use('/api/protegido', protectedRoutes);

// Rotas de Notícias (CRUD)
const noticiaRoutes = require('./routes/noticiaRoutes');
app.use('/api/noticias', noticiaRoutes);


// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`[Servidor] Backend rodando na porta ${PORT}`);
    console.log(`[Servidor] http://localhost:${PORT}/api/status`);
});