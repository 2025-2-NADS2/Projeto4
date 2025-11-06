#  Projeto do Zero - Sistema de Gestão ONG

##  Descrição
Sistema simples e funcional para gerenciar atividades e transparência de uma ONG, criado do zero com .NET 8.0 e SQLite.

##  Funcionalidades
- **Atividades**: Visualizar campanhas e notícias da ONG
- **Transparência**: Consultar relatórios financeiros e gerar relatórios

##  Tecnologias Utilizadas
- .NET 8.0
- SQLite
- C#
- PdfSharpCore (para geração de PDF)

##  Como Executar

### Opção 1: Visual Studio 2022 (RECOMENDADO)
1. **Abra a Solução**: Abra o arquivo `Ent_EstrutuDados.sln` no Visual Studio 2022
2. **Restaure Pacotes**: O VS 2022 restaurará automaticamente os pacotes NuGet
3. **Compile**: Pressione `Ctrl+Shift+B` ou clique em "Build > Build Solution"
4. **Execute**: Pressione `F5` para debug ou `Ctrl+F5` para executar sem debug

### Opção 2: Visual Studio Code / Terminal
```bash
# Limpar e buildar
dotnet clean Ent_EstrutuDados.csproj
dotnet build Ent_EstrutuDados.csproj

# Executar
dotnet run --project Ent_EstrutuDados.csproj
```

##  Como Usar
1. Quando o programa iniciar, escolha uma opção:
   - Digite `Atividades` para ver campanhas e notícias
   - Digite `Transparência` para ver relatórios financeiros

2. O sistema criará automaticamente:
   - Banco de dados SQLite (`dados.db`)
   - Dados de teste para demonstração
   - Relatório de transparência em TXT (`relatorio_transparencia.txt`)
   - Relatório de transparência em PDF (`relatorio_transparencia.pdf`)

##  Estrutura do Banco de Dados
- **Campanhas**: Informações sobre campanhas da ONG
- **Noticias**: Notícias e atualizações
- **Relatorios**: Dados financeiros e operacionais

##  Exemplo de Uso
```
 Você quer saber sobre o quê? (Atividades / Transparência)
> Atividades

===  ATIVIDADES ===

 CAMPANHAS:
  [Campanha] Natal Solidário - Arrecadação de brinquedos e alimentos (01/11/2024)
  [Campanha] Campanha do Agasalho 2024 - Arrecadação de roupas de inverno (01/06/2024)

NOTÍCIAS:
  [Notícia] Natal de esperança - Mais de 500 crianças serão atendidas este ano (10/12/2024)
```

##  Arquivos Gerados
- `dados.db` - Banco de dados SQLite
- `relatorio_transparencia.txt` - Relatório de transparência (formato texto)
- `relatorio_transparencia.pdf` - Relatório de transparência (formato PDF)

##  Status do Projeto
 Funcionando perfeitamente - Pronto para uso em Visual Studio 2022!