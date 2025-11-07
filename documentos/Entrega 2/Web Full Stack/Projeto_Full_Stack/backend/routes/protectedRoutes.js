// backend/routes/protectedRoutes.js
const express = require('express');
const router = express.Router();

// IMPORTANTE: Importamos o nosso "segurança"
const checkAuth = require('../middleware/checkAuth');

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