// backend/database/db.js
const mysql = require('mysql2/promise');

// Esta é a variável padrão que o Railway vai injetar
// com a sua senha, host, utilizador, etc.
const connectionString = process.env.DATABASE_URL;

const pool = mysql.createPool(connectionString);

// Testa a conexão
pool.getConnection()
    .then(connection => {
        console.log('[Database] Conexão com MySQL (Railway) estabelecida com sucesso.');
        connection.release();
    })
    .catch(err => {
        console.error('[Database] Erro ao conectar com o MySQL (Railway):');
        console.error(err.message);
    });

module.exports = pool;