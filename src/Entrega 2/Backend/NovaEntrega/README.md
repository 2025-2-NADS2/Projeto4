Servidor_PI — API .NET 8 com SQLite

GUIA DE USO!



Essa é uma API para gestão de doações feita com ASP.NET Core, EF Core e SQLite.

Requisitos:

.NET 8 SDK

Visual Studio 2022 ou VS Code

Conta no Azure (para deploy)

Como rodar local:

Acesse o diretório do projeto:
cd NovaEntrega

Restaure e compile (opcional):
dotnet restore Servidor_PI.sln
dotnet build Servidor_PI.sln --configuration Release

Execute a aplicação (o banco será criado automaticamente):
dotnet run --project Servidor_PI.csproj --launch-profile http

Observações:
Na primeira execução, o banco SQLite é criado e migrado automaticamente.
Se rodar apenas com “dotnet run”, a porta pode variar (por exemplo: 5279).

Acesse os serviços com o perfil http:
Swagger UI: http://localhost:5000/swagger

Health Check: http://localhost:5000/api/health

API Base: http://localhost:5000/api

URLs e portas:
Perfil http (recomendado): http://localhost:5000

Execução sem perfil: pode abrir em outra porta, como http://localhost:5279

Para forçar a porta: use “set ASPNETCORE_URLS=http://localhost:5000”
 antes de rodar.

Executar como publicado:
dotnet publish Servidor_PI.csproj -c Release -o publish
Depois rode:
$env:ASPNETCORE_ENVIRONMENT = "Development"
./publish/Servidor_PI.exe

URLs do modo publicado:
http://localhost:5000

Swagger: http://localhost:5000/swagger

O que já funciona:

Health Check (GET /api/health) retorna {"status":"ok"}

API de Usuários com listagem e CRUD

Swagger disponível

Banco SQLite criado automaticamente

Logs aparecem no console

CORS liberado

Endpoints principais:

Health Check
GET /api/health — mostra o status da API

Usuários
GET /api/usuarios — lista todos
GET /api/usuarios/{id} — busca por ID
GET /api/usuarios/publicar — publica todos
POST /api/usuarios — cria novo
PUT /api/usuarios/{id} — atualiza
DELETE /api/usuarios/{id} — remove

Campanhas
GET /api/campanhas — lista todas
GET /api/campanhas/{id} — busca por ID
POST /api/campanhas — cria nova
PUT /api/campanhas/{id} — atualiza
DELETE /api/campanhas/{id} — remove

Doações
GET /api/doacoes — lista todas
GET /api/doacoes/{id} — busca por ID
POST /api/doacoes — cria nova
PUT /api/doacoes/{id} — atualiza
DELETE /api/doacoes/{id} — remove

Notícias
GET /api/noticias — lista todas
GET /api/noticias/{id} — busca por ID
POST /api/noticias — cria nova
PUT /api/noticias/{id} — atualiza
DELETE /api/noticias/{id} — remove

Relatórios
GET /api/relatorios — lista todos
GET /api/relatorios/{id} — busca por ID
POST /api/relatorios — cria novo
PUT /api/relatorios/{id} — atualiza
DELETE /api/relatorios/{id} — remove

Views
GET /api/views/buscar-nome?usuario=xxx — busca nome completo e de usuário
GET /api/views/doacoes-detalhadas — lista doações com detalhes

Banco de dados:
Tipo: SQLite
Local (dev): Data/app.db
Produção (Azure): D:\home\site\wwwroot\Data\app.db
Criação: automática na primeira execução

O banco já vem com dados de teste:
Dois usuários, duas campanhas e duas doações.

Para recriar o banco com dados de teste, apague o arquivo Data/app.db e rode novamente o projeto.

Configurar deploy via GitHub:
No Azure App Service, vá em Deployment Center, escolha GitHub, faça login e selecione o repositório e a branch main.
Clique em Save. O Azure cria automaticamente o workflow e faz o deploy (leva de 5 a 10 minutos).

Configurar Connection String:
No App Service, vá em Configuration > Application settings
Adicione uma nova configuração chamada ConnectionStrings:Default
Valor: Data Source=D:\home\site\wwwroot\Data\app.db
Salve as alterações.

Testar:
Acesse https://projeto-pi-nads2-grupo4-frb0e0dscjbve2d9.brazilsouth-01.azurewebsites.net/api/health

Deve retornar {"status":"ok"}
Swagger: https://projeto-pi-nads2-grupo4-frb0e0dscjbve2d9.brazilsouth-01.azurewebsites.net/swagger/index.html

Listar usuários: https://projeto-pi-nads2-grupo4-frb0e0dscjbve2d9.brazilsouth-01.azurewebsites.net/api/usuarios

Importante:
O Swagger está habilitado em produção para facilitar os testes.
O banco será criado automaticamente na primeira execução no Azure.
O primeiro deploy pode demorar alguns minutos.

CI/CD via GitHub Actions:
O workflow principal é .github/workflows/main_projeto-pi-nads2-grupo4.yml
Ele já compila e publica o projeto Servidor_PI dentro de NovaEntrega.
Pastas .github/workflows fora da raiz não são lidas pelo GitHub.

Tecnologias usadas:
.NET 8
ASP.NET Core Web API
Entity Framework Core 8
SQLite
Serilog
Swagger/OpenAPI

Estrutura do projeto (resumo):
Servidor_PI
Controllers — controladores da API
Data — contextos e mapeamentos
Enums — tipos enumerados
Models — entidades
Repositories — interfaces e implementações
Program.cs — ponto de entrada
appsettings.json — configuração

Logs aparecem no console enquanto a API roda.

Códigos de status:
200 OK — sucesso
201 Created — criado
400 BadRequest — dados inválidos
404 NotFound — não encontrado
409 Conflict — conflito (como email repetido)
500 InternalServerError — erro interno

Como testar:
Health Check:
Invoke-WebRequest -Uri "http://localhost:5000/api/health
" -UseBasicParsing

Listar usuários:
Invoke-WebRequest -Uri "http://localhost:5000/api/usuarios
" -UseBasicParsing

Listar doações:
Invoke-WebRequest -Uri "http://localhost:5000/api/doacoes
" -UseBasicParsing

Via Swagger: abra http://localhost:5000/swagger

Testes via curl:
curl http://localhost:5000/api/health

curl http://localhost:5000/api/usuarios

Problemas comuns:
Se aparecer “Unable to open database file”, verifique se a pasta Data existe.
Erros de chave estrangeira acontecem quando registros relacionados ainda não existem.
Se a aplicação não iniciar, veja as mensagens do console e cheque se a porta 5000 está livre.

Se o banco não for criado, apague o arquivo Data/app.db e execute novamente.
Se a porta mudar, defina ASPNETCORE_URLS=http://localhost:5000
 antes de rodar.
