// ========================================
// INSTITUTO ALMA - SERVIDOR SIMPLES
// ========================================

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware básico
app.use(express.json());
app.use(express.static(__dirname));

// ========================================
// ROTAS PRINCIPAIS
// ========================================

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// ========================================
// API SIMPLES
// ========================================


// Doação - apenas registra
app.post('/api/doacao', (req, res) => {
    const { nome, email, valor } = req.body;
    
    if (!nome || !email || !valor) {
        return res.status(400).json({ success: false, message: 'Dados obrigatórios' });
    }
    
    // Simula registro
    console.log(` Doação: ${nome} - R$ ${valor} - ${email}`);
    
    res.json({ 
        success: true, 
        message: 'Doação registrada!',
        data: { nome, email, valor }
    });
});

// Voluntário - apenas registra
app.post('/api/voluntario', (req, res) => {
    const { nome, email, telefone, area } = req.body;
    
    if (!nome || !email || !telefone || !area) {
        return res.status(400).json({ success: false, message: 'Dados obrigatórios' });
    }
    
    // Simula registro
    console.log(` Voluntário: ${nome} - ${area} - ${email}`);
    
    res.json({ 
        success: true, 
        message: 'Candidatura enviada!',
        data: { nome, email, telefone, area }
    });
});

// Contato - apenas registra
app.post('/api/contato', (req, res) => {
    const { nome, email, assunto, mensagem } = req.body;
    
    if (!nome || !email || !assunto || !mensagem) {
        return res.status(400).json({ success: false, message: 'Dados obrigatórios' });
    }
    
    // Simula registro
    console.log(` Contato: ${nome} - ${assunto} - ${email}`);
    
    res.json({ 
        success: true, 
        message: 'Mensagem enviada!',
        data: { nome, email, assunto }
    });
});

// Status da API
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'online', 
        message: 'Instituto ALMA API funcionando!',
        timestamp: new Date().toISOString()
    });
});

// ========================================
// INICIAR SERVIDOR
// ========================================

app.listen(PORT, () => {
    console.log(' Instituto ALMA - Servidor iniciado!');
    console.log(` http://localhost:${PORT}`);
    console.log(` Doação: POST /api/doacao`);
    console.log(` Voluntário: POST /api/voluntario`);
    console.log(` Contato: POST /api/contato`);
    console.log('=====================================');
});