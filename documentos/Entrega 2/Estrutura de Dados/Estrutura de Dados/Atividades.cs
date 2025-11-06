using Microsoft.Data.Sqlite;
using System;
using System.Collections.Generic;

namespace Ent_EstrutuDados
{
    
    public class Atividade
    {
        // Fonte da informação (ex: "Campanha" ou "Notícia")
        public string Fonte { get; set; } = "";

        // Título da atividade
        public string Titulo { get; set; } = "";

        // Texto ou explicação da atividade
        public string Descricao { get; set; } = "";

        // Data da atividade (por exemplo, data da campanha ou da notícia)
        public DateTime Data { get; set; }
    }

    
    class Atividades
    {
        // Função que mostra todas as atividades do banco (campanhas e notícias)
        public static void MostrarAtividades(string connectionString)
        {
            Console.WriteLine("\n=== ATIVIDADES ===");

            // Abre conexão com o banco de dados SQLite
            using var connection = new SqliteConnection(connectionString);
            connection.Open();

            
            // Aqui vai um comando SQL que pega os dados da tabela Campanhas
            string sqlCampanhas = "SELECT Nome, Descricao, DataInicio FROM Campanhas ORDER BY DataInicio DESC";

            // Cria o comando e executa a leitura
            using var cmdCampanhas = new SqliteCommand(sqlCampanhas, connection);
            using var readerCampanhas = cmdCampanhas.ExecuteReader();

            Console.WriteLine("\n CAMPANHAS:");
            while (readerCampanhas.Read())
            {
                // Pega os valores das colunas do banco e mostra formatado
                string nome = readerCampanhas.GetString(0);
                string descricao = readerCampanhas.GetString(1);
                DateTime data = readerCampanhas.GetDateTime(2);

                Console.WriteLine($"  [Campanha] {nome} - {descricao} ({data:dd/MM/yyyy})");
            }

            
            // Agora busca as notícias do banco
            string sqlNoticias = "SELECT Titulo, Conteudo, DataPublicacao FROM Noticias ORDER BY DataPublicacao DESC";
            using var cmdNoticias = new SqliteCommand(sqlNoticias, connection);
            using var readerNoticias = cmdNoticias.ExecuteReader();

            Console.WriteLine("\n NOTÍCIAS:");
            while (readerNoticias.Read())
            {
                string titulo = readerNoticias.GetString(0);
                string conteudo = readerNoticias.GetString(1);
                DateTime data = readerNoticias.GetDateTime(2);

                Console.WriteLine($"  [Notícia] {titulo} - {conteudo} ({data:dd/MM/yyyy})");
            }
        }
    }
}
