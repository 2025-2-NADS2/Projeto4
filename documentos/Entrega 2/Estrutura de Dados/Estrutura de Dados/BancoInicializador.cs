using System;
using Microsoft.Data.Sqlite;

namespace Ent_EstrutuDados
{
    // Essa classe serve para criar e preparar o banco de dados.
    public static class BancoInicializador
    {
        // Função que cria o banco e as tabelas, se ainda não existirem.
        public static void CriarBancoDados(string connectionString)
        {
            // Abre uma conexão com o SQLite
            using var connection = new SqliteConnection(connectionString);
            connection.Open();

            // SQL com as tabelas que o programa precisa
            string sql = @"
                CREATE TABLE IF NOT EXISTS Campanhas (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    Nome TEXT NOT NULL,
                    Descricao TEXT,
                    DataInicio DATE,
                    DataFim DATE
                );

                CREATE TABLE IF NOT EXISTS Noticias (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    Titulo TEXT NOT NULL,
                    Conteudo TEXT,
                    DataPublicacao DATE,
                    Autor TEXT
                );

                CREATE TABLE IF NOT EXISTS Relatorios (
                    Id INTEGER PRIMARY KEY AUTOINCREMENT,
                    Tipo TEXT NOT NULL,
                    Campanha TEXT,
                    ValorGasto REAL,
                    DataRelatorio DATE
                );
            ";

            // Cria o comando e executa o SQL acima (criando as tabelas)
            using var command = new SqliteCommand(sql, connection);
            command.ExecuteNonQuery();

            Console.WriteLine("Banco de dados criad com sucesso");
        }

        // Função que insere alguns dados de teste caso o banco esteja vazio
        public static void InserirDadosTeste(string connectionString)
        {
            // Abre a conexão com o banco
            using var connection = new SqliteConnection(connectionString);
            connection.Open();

            // Verifica se já existem dados na tabela Campanhas
            var checkCommand = new SqliteCommand("SELECT COUNT(*) FROM Campanhas", connection);
            int count = Convert.ToInt32(checkCommand.ExecuteScalar());

            // Se já tiver dados, não insere de novo
            if (count > 0)
            {
                Console.WriteLine("Dados de teste já existe no banco");
                return;
            }

            // SQL com várias inserções de dados de exemplo
            string sql = @"
                INSERT INTO Campanhas (Nome, Descricao, DataInicio, DataFim) VALUES
                ('Campanha do Agasalho 2024', 'Arrecadação de roupas de inverno', '2024-06-01', '2024-08-31'),
                ('Natal Solidário', 'Arrecadação de brinquedos e alimentos', '2024-11-01', '2024-12-25'),
                ('Cesta Básica', 'Distribuição de cestas para famílias carentes', '2024-01-01', '2024-12-31');

                INSERT INTO Noticias (Titulo, Conteudo, DataPublicacao, Autor) VALUES
                ('Arrecadação supera expectativas', 'A campanha arrecadou mais de 1000 peças de roupa', '2024-07-15', 'Equipe de Comunicação'),
                ('Natal de esperança', 'Mais de 500 crianças serão atendidas este ano', '2024-12-10', 'Voluntários'),
                ('Nova parceria estabelecida', 'ONG firmou parceria com empresas locais', '2024-03-20', 'Diretoria');

                INSERT INTO Relatorios (Tipo, Campanha, ValorGasto, DataRelatorio) VALUES
                ('Financeiro', 'Campanha do Agasalho 2024', 15000.50, '2024-09-01'),
                ('Financeiro', 'Natal Solidário', 8500.75, '2024-12-26'),
                ('Operacional', 'Cesta Básica', 25000.00, '2024-06-30');
            ";

            // Executa os INSERTs de teste
            using var command = new SqliteCommand(sql, connection);
            int rowsAffected = command.ExecuteNonQuery();

            
        }
    }
}
