// backend/middleware/checkAuth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // 1. Pegar o token do cabeçalho "Authorization"
        // O frontend vai enviar no formato: "Bearer eyJhbGciOiJ..."
        const authHeader = req.header('Authorization');

        // 2. Verificar se o cabeçalho existe
        if (!authHeader) {
            return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
        }

        // 3. Verificar se o token tem o prefixo "Bearer "
        if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Formato do token inválido.' });
        }

        // 4. Separar o "Bearer " e pegar só o token
        const token = authHeader.split(' ')[1];

        // 5. Verificar se o token é válido (usando o mesmo segredo do .env)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 6. Se for válido, anexamos os dados do usuário (o 'payload') ao 'req'
        // Assim, a próxima rota saberá quem é o usuário
        req.user = decoded.user;

        // 7. Chamar 'next()' para deixar a requisição continuar para a rota final
        next();

    } catch (error) {
        // Se o 'jwt.verify' falhar (token expirado ou inválido), ele dará um erro
        res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
};