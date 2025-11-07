// backend/database/db.js
const mysql = require('mysql2/promise'); // Usando a versão com 'promises'

// Cria o pool de conexões lendo as variáveis do .env
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Testa a conexão (opcional, mas bom)
pool.getConnection()
    .then(connection => {
        console.log('[Database] Conexão com MySQL estabelecida com sucesso.');
        connection.release();
    })
    .catch(err => {
        console.error('[Database] Erro ao conectar com o MySQL:');
        console.error(err.message);
    });

// Exporta o pool para ser usado nos controllers
module.exports = pool;