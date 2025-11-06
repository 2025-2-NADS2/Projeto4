using System;
using System.IO;
using Microsoft.Data.Sqlite;

namespace Ent_EstrutuDados
{
    public static class BancoDeDados
    {
        // Pega a pasta onde o programa está sendo executado 
        public static string PastaProjeto => AppContext.BaseDirectory;

        // Define o caminho completo do arquivo do banco de dados 
        // Junta a pasta do projeto com o nome do arquivo
        public static string CaminhoBanco => Path.Combine(PastaProjeto, "dados.db");

        // Cria a string de conexão usada pelo SQLite
        public static string ConnectionString => $"Data Source={CaminhoBanco}";

        // FuncAo que abre a conexão com o banco de dados e já retorna ela aberta
        public static SqliteConnection AbrirConexao()
        {
            // Cria o objeto de conexao usando a string configurada
            var conn = new SqliteConnection(ConnectionString);

            // Abre a conexao para poder ler e escrever dados
            conn.Open();

            // Retorna a conexao ja aberta pra quem chamou a funcao
            return conn;
        }
    }
}
