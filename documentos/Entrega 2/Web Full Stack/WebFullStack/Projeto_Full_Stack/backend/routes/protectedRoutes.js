// backend/routes/protectedRoutes.js
const express = require('express');
const router = express.Router();

// IMPORTANTE: Importamos o nosso "segurança"
const checkAuth = require('../middleware/checkAuth');

// Esta é a nossa rota protegida
// URL: GET /api/protegido/dados
// Note que 'checkAuth' é passado como um argumento ANTES da função final.
// O Express vai primeiro executar 'checkAuth'. Se ele chamar 'next()',
// aí sim ele executa a função '(req, res) => ...'
router.get('/dados', checkAuth, (req, res) => {

    // Se o código chegou aqui, significa que o token era válido!
    // E o 'req.user' foi adicionado pelo middleware.
    res.json({
        message: 'Parabéns! Você acessou uma rota protegida.',
        dadosSecretos: 'Esta é uma informação que só usuários logados podem ver.',
        usuarioQueFezARequisicao: req.user
    });
});

module.exports = router;