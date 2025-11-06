using Microsoft.Data.Sqlite; // biblioteca pra se conectar e trabalhar com bancos de dados SQLite
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ent_EstrutuDados
{
   
    public class DocumentoTransparencia
    {
      
        public string Tipo { get; set; } = "";

       
        public string NomeCampanha { get; set; } = "";

        
        public double ValorGasto { get; set; }

        
        public DateTime Data { get; set; }
    }

    
    class Transparencias
    {
        
        public static void MostrarTransparencia(string connectionString)
        {
            Console.WriteLine("\n===  DOCUMENTOS DE TRANSPARÊNCIA ===");

            // Abre a conexao com o banco de dados SQLite
            using var connection = new SqliteConnection(connectionString);
            connection.Open();

            // Comando SQL pra buscar os dados da tabela Relatorios
            string sql = "SELECT Tipo, Campanha, ValorGasto, DataRelatorio FROM Relatorios ORDER BY DataRelatorio DESC";
            using var command = new SqliteCommand(sql, connection);
            using var reader = command.ExecuteReader(); // Lê os resultados

            double totalGasto = 0; // Soma de todos os valores gastos
            var documentos = new List<DocumentoTransparencia>(); // Lista pra guardar os dados

            // Le cada linha retornada pelo banco
            while (reader.Read())
            {
                // Pega os valores de cada coluna da linha atual
                string tipo = reader.GetString(0);
                string campanha = reader.GetString(1);
                double valor = reader.GetDouble(2);
                DateTime data = reader.GetDateTime(3);

                // Mostra no console as informacoes de cada registro
                Console.WriteLine($"  {tipo} | {campanha} | R$ {valor:N2} | {data:dd/MM/yyyy}");

                // Soma o valor ao total geral
                totalGasto += valor;

                // Adiciona o documento a lista
                documentos.Add(new DocumentoTransparencia
                {
                    Tipo = tipo,
                    NomeCampanha = campanha,
                    ValorGasto = valor,
                    Data = data
                });
            }

            Console.WriteLine($"\n TOTAL GERAL: R$ {totalGasto:N2}");

            // Tenta criar um arquivo de texto com os dados
            try
            {
                // Caminho do arquivo TXT que será criado
                string arquivoRelatorio = Path.Combine(AppContext.BaseDirectory, "relatorio_transparencia.txt");

                // Cria ou substitui o arquivo
                using var writer = new StreamWriter(arquivoRelatorio);

                // Cabeçalho do relatório
                writer.WriteLine("RELATÓRIO DE TRANSPARÊNCIA");
                writer.WriteLine($"Gerado em: {DateTime.Now:dd/MM/yyyy HH:mm}");
                writer.WriteLine($"Total gasto: R$ {totalGasto:N2}");
                writer.WriteLine("\nDetalhes:");

                // Escreve cada documento dentro do arquivo
                foreach (var doc in documentos)
                {
                    writer.WriteLine($"{doc.Tipo} | {doc.NomeCampanha} | R$ {doc.ValorGasto:N2} | {doc.Data:dd/MM/yyyy}");
                }

                // Mostra no console onde o arquivo foi salvo
                Console.WriteLine($"\n Relatório TXT salvo em: {arquivoRelatorio}");
            }
            catch (Exception ex)
            {
                // Caso erro ao criar o arquivo, mostra a mensagem
                Console.WriteLine($" Erro ao criar arquivo TXT: {ex.Message}");
            }

            // Gera tambem um arquivo PDF 
            GeradorPdf.GerarRelatorioTransparencia(documentos, totalGasto, AppContext.BaseDirectory);
        }
    }
}
