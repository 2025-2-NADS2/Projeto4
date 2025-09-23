// src/models/Usuario.js
const db = require('../database/database');

class Usuario {
    // Validação: nome completo, CPF e email obrigatórios
    static validar(dados) {
        const erros = [];

        if (!dados.nome_completo) erros.push('Nome completo é obrigatório');
        if (!dados.cpf) erros.push('CPF é obrigatório');
        if (!dados.email) erros.push('Email é obrigatório');

        return erros;
    }

    // CRIAR USUÁRIO
    static async criar(dados) {
        try {
            const erros = Usuario.validar(dados);
            if (erros.length > 0) {
                throw { tipo: 'validacao', erros };
            }

            const query = `
                INSERT INTO Usuario (nome_completo, telefone, cpf, cep, nome_usuario, senha, email) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;

            const result = await db.runAsync(query, [
                dados.nome_completo,
                dados.telefone || null,
                dados.cpf,
                dados.cep || null,
                dados.nome_usuario || null,
                dados.senha || null,
                dados.email
            ]);

            // Retorna os dados 
            return { id: result.lastID, ...dados };

        } catch (error) {
            console.error('Erro ao criar usuário:', error);

            if (error.message && error.message.includes('UNIQUE constraint failed')) {
                throw {
                    tipo: 'validacao',
                    erros: ['Dados duplicados: CPF, email ou nome de usuário já existe']
                };
            }

            throw error;
        }
    }

    // BUSCAR TODOS OS USUÁRIOS
    static async buscar() {
        try {
            const rows = await db.allAsync(`
                SELECT cd_cliente, nome_completo, telefone, cpf, cep, nome_usuario, email 
                FROM Usuario 
                ORDER BY cd_cliente DESC
            `);

            return rows;
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            throw error;
        }
    }

    // BUSCAR USUÁRIO POR ID
    static async buscarPorId(id) {
        try {
            const row = await db.getAsync(`
                SELECT cd_cliente, nome_completo, telefone, cpf, cep, nome_usuario, email 
                FROM Usuario 
                WHERE cd_cliente = ?
            `, [id]);

            return row; // null se não encontrar
        } catch (error) {
            console.error(`Erro ao buscar usuário ${id}:`, error);
            throw error;
        }
    }

    // DELETAR USUÁRIO
    static async deletar(id) {
        try {
            const result = await db.runAsync("DELETE FROM Usuario WHERE cd_cliente = ?", [id]);

            if (result.changes === 0) {
                throw new Error('Usuário não encontrado');
            }

            return { id, deletado: true };
        } catch (error) {
            console.error(`Erro ao deletar usuário ${id}:`, error);
            throw error;
        }
    }
}

module.exports = Usuario;