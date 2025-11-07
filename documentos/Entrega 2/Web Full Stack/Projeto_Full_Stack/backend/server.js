// backend/server.js
require('dotenv').config(); // Carrega o .env
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Permite acesso de origens diferentes (React)
app.use(express.json()); // Permite que o app entenda JSON
app.use(express.urlencoded({ extended: true })); // Permite dados de formulário


// CONECTAR AO BANCO DE DADOS
require('./database/db.js'); 

// Rota de Teste da API
app.get('/api/status', (req, res) => {
    res.json({ status: 'API está online e funcionando!' });
});


// CARREGAR ROTAS DE AUTENTICAÇÃO (SÓ ESTE BLOCO!)
const authRoutes = require('./routes/authRoutes'); // Importa o arquivo de rotas
app.use('/api/auth', authRoutes); // Diz ao app para usar as rotas com o prefixo /api/auth


// CARREGAR ROTAS PROTEGIDAS (ADICIONE ESTAS LINHAS!)
const protectedRoutes = require('./routes/protectedRoutes');
app.use('/api/protegido', protectedRoutes);

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`[Servidor] Backend rodando na porta ${PORT}`);
    console.log(`[Servidor] http://localhost:${PORT}/api/status`);
});

// CARREGAR ROTAS DE NOTÍCIAS (VERIFIQUE SE ISSO EXISTE!)
const noticiaRoutes = require('./routes/noticiaRoutes');
app.use('/api/noticias', noticiaRoutes);

