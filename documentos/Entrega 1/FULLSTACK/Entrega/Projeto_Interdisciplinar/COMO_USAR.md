# 🚀 Instituto ALMA - Como Usar

## Instalação SUPER SIMPLES

1. **Instalar Node.js** (se não tiver)
   - Baixe em: https://nodejs.org
   - Instale a versão LTS

2. **Instalar dependências**
```bash
npm install
```

3. **Iniciar o servidor**
```bash
npm start
```

4. **Abrir no navegador**
   - http://localhost:3000

## ✅ Pronto! 

O sistema está funcionando com:
- ✅ Site completo
- ✅ Sistema de doações
- ✅ Candidatura de voluntários
- ✅ Formulário de contato

## 📡 API Endpoints

- `POST /api/doacao` - Registrar doação
- `POST /api/voluntario` - Candidatar-se como voluntário
- `POST /api/contato` - Enviar mensagem
- `GET /api/status` - Status da API

## 📝 Exemplo de Uso

### Doação
```javascript
fetch('/api/doacao', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        nome: 'João', 
        email: 'joao@email.com', 
        valor: 50 
    })
});
```

## 🎯 Tudo Funcionando!

- Frontend: HTML + CSS + JavaScript
- Backend: Node.js + Express (super simples)
- Dados: Salvos no console (pode ver no terminal)
- Sem banco de dados complexo
- Sem configurações complicadas

**É isso! Simples assim! 🎉**
