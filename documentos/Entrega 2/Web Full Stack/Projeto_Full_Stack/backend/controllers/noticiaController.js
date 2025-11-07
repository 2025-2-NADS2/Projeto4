// backend/controllers/noticiaController.js
const pool = require('../database/db');

// 1. Criar Nova Notícia (PROTEGIDO + UPLOAD)
exports.createNoticia = async (req, res) => {
    try {
        const { titulo, descricao } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'Nenhuma imagem enviada.' });
        }
        if (!titulo || !descricao) {
            return res.status(400).json({ message: 'Título e descrição são obrigatórios.' });
        }

        const imagem_url = req.file.path; 

        const [result] = await pool.query(
            'INSERT INTO noticias (titulo, descricao, imagem_url) VALUES (?, ?, ?)',
            [titulo, descricao, imagem_url]
        );

        res.status(201).json({ 
            message: 'Notícia criada com sucesso!',
            noticiaId: result.insertId,
            imagem_url: imagem_url
        });

    } catch (error) {
        console.error('[noticiaController.createNoticia] Erro:', error);
        res.status(500).json({ message: 'Erro no servidor ao criar notícia.' });
    }
};

// 2. Ler Todas as Notícias (PÚBLICO)
exports.getAllNoticias = async (req, res) => {
    try {
        const [noticias] = await pool.query('SELECT * FROM noticias ORDER BY data_criacao DESC');
        res.json(noticias);
    } catch (error) {
        console.error('[noticiaController.getAllNoticias] Erro:', error);
        res.status(500).json({ message: 'Erro no servidor ao buscar notícias.' });
    }
};

// 3. Deletar uma Notícia (PROTEGIDO)
exports.deleteNoticia = async (req, res) => {
    try {
        const { id } = req.params; 
        const [result] = await pool.query('DELETE FROM noticias WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Notícia não encontrada.' });
        }

        res.json({ message: 'Notícia deletada com sucesso.' });

    } catch (error) {
        console.error('[noticiaController.deleteNoticia] Erro:', error);
        res.status(500).json({ message: 'Erro no servidor ao deletar notícia.' });
    }
};