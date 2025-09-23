//esse codigo foi retirado do projeto

// src/models/Campanha.js
const db = require('../database/database');

class Campanha {
    constructor(data = {}) {
        this.id = data.cd_campanha || null;
        this.nomeCampanha = data.nome_campanha || '';
        this.metaArrecadacao = data.meta_arrecadacao || 0;
        this.inicio = data.inicio || '';
        this.fim = data.fim || '';
    }

    // Validação simples dos dados
    static validar(dados) {
        const erros = [];

        if (!dados.nome_campanha) erros.push('Nome da campanha é obrigatório');
        if (!dados.inicio) erros.push('Data de início é obrigatória');
        if (!dados.fim) erros.push('Data de fim é obrigatória');

        return erros;
    }

    // CRIAR CAMPANHA
    static async criar(dados) {
        try {
            const erros = this.validar(dados);
            if (erros.length > 0) {
                throw { tipo: 'validacao', erros };
            }

            const query = `INSERT INTO Campanha (nome_campanha, meta_arrecadacao, inicio, fim) 
                           VALUES (?, ?, ?, ?)`;

            const result = await db.runAsync(query, [
                dados.nome_campanha,
                dados.meta_arrecadacao || 0,
                dados.inicio,
                dados.fim
            ]);

            return { id: result.lastID, ...dados };
        } catch (error) {
            console.error('Erro ao criar campanha:', error);
            throw error;
        }
    }

    // BUSCAR CAMPANHAS
    static async buscar() {
        try {
            const rows = await db.allAsync("SELECT * FROM Campanha ORDER BY cd_campanha DESC");
            return rows;
        } catch (error) {
            console.error('Erro ao buscar campanhas:', error);
            throw error;
        }
    }

    // DELETAR CAMPANHA
    static async deletar(id) {
        try {
            const result = await db.runAsync("DELETE FROM Campanha WHERE cd_campanha = ?", [id]);

            if (result.changes === 0) {
                throw new Error('Campanha não encontrada');
            }

            return { id, deletada: true };
        } catch (error) {
            console.error(`Erro ao deletar campanha com id ${id}:`, error);
            throw error;
        }
    }
}

module.exports = Campanha;
