Certo! Aqui está um README.md completo para o seu projeto.

Este ficheiro é a "porta de entrada" do seu projeto. Ele explica o que o projeto faz, como o seu professor o pode testar, e (o mais importante) dá o link público para o seu site no ar.

Ação Recomendada:

Na pasta raiz do seu projeto no VS Code (a pasta Projeto_Full_Stack), crie um novo ficheiro chamado README.md.

Copie e cole o texto abaixo lá dentro.

Substitua a linha [Link para o seu vídeo...] pelo link do seu vídeo.

Suba este ficheiro para o seu GitHub (git add README.md, git commit, git push).

Projeto Interdisciplinar (PI) - Portal Full Stack Instituto ALMA
Este é um projeto Full Stack completo desenvolvido como requisito para o Projeto Interdisciplinar (PI) do 2º semestre de Análise e Desenvolvimento de Sistemas.

O objetivo foi construir um portal institucional 100% funcional para a ONG "Instituto ALMA", incluindo um site público e uma área administrativa (CMS) para gestão de conteúdo, com autenticação e upload de imagens.

🚀 Projeto no Ar! (Deploy Completo)
Este projeto está 100% funcional e hospedado na nuvem (deploy completo) na plataforma Railway, cumprindo os requisitos da entrega.

Para aceder ao site, clique no link: https://protective-nature-production.up.railway.app/

2. Tecnologias Utilizadas
Frontend: React (Vite), React Router DOM, Axios

Backend: Node.js, Express

Banco de Dados: MySQL

Segurança: JWT (JSON Web Tokens) e Bcrypt (Hashing de Senhas)

Upload de Ficheiros: Multer

Deploy: Railway (para Frontend, Backend e Banco de Dados MySQL)

3. Funcionalidades Implementadas
Este projeto cumpre todos os requisitos técnicos dos Anexos 1 e 2.

Interface Pública (Frontend):

Um site SPA (Single Page Application) responsivo, construído em React.

Recriação dos designs fornecidos para as páginas Home, Sobre, Colaborador, Como Doar e Prestação de Contas.

Navegação dinâmica com React Router DOM, incluindo o efeito de "botão ativo" no header.

Uso de useState para interatividade (ex: slider de imagens) e useEffect para carregar dados.

Área Administrativa (Backend + Frontend):

Sistema de Login Seguro: Registo e Login para a área administrativa.

Criptografia: Senhas são hasheadas com Bcrypt antes de serem salvas no MySQL.

Autenticação por Token: O login gera um Token JWT que é armazenado no localStorage do navegador para autenticar pedidos futuros.

Rotas Protegidas (Frontend): A página de "Dashboard" (/dashboard) só é acessível para utilizadores logados (usando um ProtectedRoute).

Rotas Protegidas (Backend): O middleware checkAuth.js protege as rotas críticas da API (como criar/apagar), exigindo um token JWT válido.

CRUD de Conteúdo (Notícias): O administrador pode ver, criar e apagar "Notícias".

Upload de Imagens: O formulário de "Criar Notícia" utiliza FormData para enviar a imagem, que é processada e salva no servidor pelo Multer.

Feedback ao Utilizador: Todas as ações de API (login, registo, postar) incluem mensagens de loading e error.

4. Como Rodar o Projeto Localmente
Pré-requisitos:

Node.js (versão LTS)

XAMPP (ou outro servidor MySQL)

Configuração do Banco de Dados (XAMPP)
Inicie o XAMPP (módulos Apache e MySQL).

Aceda ao phpMyAdmin (http://localhost/phpmyadmin/).

Crie um novo banco de dados chamado instituto_alma_db.

Clique no banco instituto_alma_db, vá à aba SQL e execute o seguinte script para criar as tabelas:

SQL

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    imagem_url VARCHAR(255) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Configuração do Backend
Navegue até à pasta backend: cd backend

Crie um ficheiro .env e adicione o seguinte:

Snippet de código

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=instituto_alma_db
JWT_SECRET=supersecreto123
Instale as dependências: npm install

Inicie o servidor backend: npm start (O terminal deve mostrar "Conexão com MySQL estabelecida...")

Configuração do Frontend
Abra um novo terminal e navegue até à pasta frontend: cd frontend

Instale as dependências: npm install

Inicie o servidor de desenvolvimento: npm run dev

O site estará acessível em http://localhost:5173.

5. Rotas da API (Endpoints)
O backend (server.js) expõe as seguintes rotas principais:

Autenticação (Auth)
POST /api/auth/register: Regista um novo utilizador.

POST /api/auth/login: Autentica um utilizador e retorna um token JWT.

Notícias (CRUD)
GET /api/noticias: Retorna uma lista de todas as notícias (Pública).

POST /api/noticias: Cria uma nova notícia. Requer token JWT e form-data (com imagem). (Protegida)

DELETE /api/noticias/:id: Apaga uma notícia. Requer token JWT. (Protegida)