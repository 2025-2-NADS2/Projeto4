// backend/routes/noticiaRoutes.js
const express = require('express');
const router = express.Router();

const noticiaController = require('../controllers/noticiaController');
const checkAuth = require('../middleware/checkAuth'); // Nosso "segurança"
const upload = require('../middleware/uploadMiddleware'); // Nosso "uploader"

// --- ROTAS PÚBLICAS ---
// GET /api/noticias
router.get('/', noticiaController.getAllNoticias);

// --- ROTAS PROTEGIDAS ---
// POST /api/noticias
router.post('/', checkAuth, upload.single('imagem'), noticiaController.createNoticia);

// DELETE /api/noticias/:id
router.delete('/:id', checkAuth, noticiaController.deleteNoticia);

module.exports = router;