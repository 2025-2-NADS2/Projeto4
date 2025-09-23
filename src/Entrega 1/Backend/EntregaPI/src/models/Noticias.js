// src/models/Noticias.js
const db = require('../database/database');

class Noticias {
    // Validação dos dados da notícia
    static validar(dados) {
        const erros = [];

        if (!dados.cd_campanha) erros.push('Campanha é obrigatória');
        if (!dados.titulo_noticia) erros.push('Título da notícia é obrigatório');
        if (!dados.data_noticia) erros.push('Data da notícia é obrigatória');
        if (!dados.autor) erros.push('Autor é obrigatório');
        if (!dados.conteudo) erros.push('Conteúdo da notícia é obrigatório');

        return erros;
    }

    // CRIAR NOTÍCIA
    static async criar(dados) {
        try {
            const erros = this.validar(dados);
            if (erros.length > 0) {
                throw { tipo: 'validacao', erros };
            }

            const query = `INSERT INTO Noticias (cd_campanha, titulo_noticia, data_noticia, autor, conteudo) 
                           VALUES (?, ?, ?, ?, ?)`;

            const result = await db.runAsync(query, [
                dados.cd_campanha,
                dados.titulo_noticia,
                dados.data_noticia,
                dados.autor,
                dados.conteudo
            ]);

            return { id: result.lastID, ...dados };
        } catch (error) {
            console.error('Erro ao criar notícia:', error);
            throw error;
        }
    }

    // BUSCAR NOTÍCIAS
    static async buscar() {
        try {
            const rows = await db.allAsync("SELECT * FROM Noticias ORDER BY cd_noticias DESC");
            return rows;
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
            throw error;
        }
    }

    // DELETAR NOTÍCIA
    static async deletar(id) {
        try {
            const result = await db.runAsync("DELETE FROM Noticias WHERE cd_noticias = ?", [id]);

            if (result.changes === 0) {
                throw new Error('Notícia não encontrada');
            }

            return { id, deletada: true };
        } catch (error) {
            console.error(`Erro ao deletar notícia com id ${id}:`, error);
            throw error;
        }
    }
}

module.exports = Noticias;
