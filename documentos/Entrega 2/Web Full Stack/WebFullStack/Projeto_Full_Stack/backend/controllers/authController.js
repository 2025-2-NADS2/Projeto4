// backend/controllers/authController.js
const pool = require('../database/db'); // Importa a conexão do banco
const bcrypt = require('bcryptjs'); // Importa bcrypt
const jwt = require('jsonwebtoken'); // Importa JWT

// Função para REGISTRAR um novo usuário
exports.register = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // 1. Validar se os dados vieram
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
        }

        // 2. Verificar se o usuário já existe no banco
        const [userExists] = await pool.query('SELECT email FROM users WHERE email = ?', [email]);
        if (userExists.length > 0) {
            return res.status(400).json({ message: 'Este e-mail já está cadastrado.' });
        }

        // 3. Criptografar a senha (Hashing)
        const salt = await bcrypt.genSalt(10); // Gera o "sal"
        const senhaHash = await bcrypt.hash(senha, salt); // Cria o hash

        // 4. Salvar o novo usuário no banco (com a senha criptografada)
        await pool.query(
            'INSERT INTO users (nome, email, senha_hash) VALUES (?, ?, ?)',
            [nome, email, senhaHash]
        );

        // 5. Responder com sucesso
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });

    } catch (error) {
        console.error('[authController.register] Erro:', error);
        res.status(500).json({ message: 'Erro no servidor ao tentar registrar.' });
    }
};

// Função para LOGAR um usuário
exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        // 1. Validar os dados
        if (!email || !senha) {
            return res.status(400).json({ message: 'Por favor, preencha e-mail e senha.' });
        }

        // 2. Buscar o usuário no banco pelo e-mail
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = users[0]; // Pega o primeiro (e único) resultado

        // 3. Se o usuário não for encontrado
        if (!user) {
            return res.status(401).json({ message: 'E-mail ou senha inválidos.' }); // 401 = Unauthorized
        }

        // 4. Comparar a senha digitada com a senha_hash salva no banco
        const isMatch = await bcrypt.compare(senha, user.senha_hash);

        // 5. Se as senhas não baterem
        if (!isMatch) {
            return res.status(401).json({ message: 'E-mail ou senha inválidos.' });
        }

        // 6. SUCESSO! Gerar um Token JWT
        // O "payload" é a informação que guardamos dentro do token
        const payload = {
            user: {
                id: user.id,
                email: user.email,
                nome: user.nome
            }
        };

        // 7. Assinar o token
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET, // Nosso segredo do .env
            { expiresIn: '3h' } // Token expira em 3 horas
        );

        // 8. Enviar o token para o frontend
        res.json({ 
            message: 'Login bem-sucedido!',
            token: token 
        });

    } catch (error) {
        console.error('[authController.login] Erro:', error);
        res.status(500).json({ message: 'Erro no servidor ao tentar logar.' });
    }
};