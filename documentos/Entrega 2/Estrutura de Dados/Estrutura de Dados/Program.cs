using System;
using System.IO;
using Microsoft.Data.Sqlite;

namespace Ent_EstrutuDados
{
    
    class Program
    {
        static void Main()
        {
            try
            {
                // Faz o console aceitar acentos e caracteres especiais
                Console.OutputEncoding = System.Text.Encoding.UTF8;

                // Pega o caminho e a conexão com o banco de dados
                string connectionString = BancoDeDados.ConnectionString;

                Console.WriteLine($" Criando banco em: {BancoDeDados.CaminhoBanco}");

                // Cria o banco de dados e as tabelas 
                BancoInicializador.CriarBancoDados(connectionString);

                // Coloca alguns dados de teste no banco
                BancoInicializador.InserirDadosTeste(connectionString);

                
                string resposta = "sim";

                
                while (resposta.ToLower() == "sim")
                {
                    
                    Console.WriteLine("\n O que voce quer? (Atividades / Transparência)");
                    string escolha = Console.ReadLine()?.ToLower() ?? "";

             
                    if (escolha == "atividades")
                    {
                        Atividades.MostrarAtividades(connectionString);
                    }
                 
                    else if (escolha == "transparência" || escolha == "transparencia")
                    {
                        Transparencias.MostrarTransparencia(connectionString);
                    }

                    
                    else
                    {
                        Console.WriteLine(" Opção inválida!");
                    }

                    
                    Console.WriteLine("\n Você quer perguntar sobre mais uma coisa? (sim/nao)");
                    resposta = Console.ReadLine() ?? "nao";
                }
            }
            catch (Exception ex)
            {
                // Se der algum erro, mostra o erro na tela
                Console.WriteLine($" Erro: {ex.Message}");
            }

            
            Console.WriteLine("\n Pressione qualquer tecla para sair...");
            try
            {
                // Espera o usuário apertar uma tecla pra fechar
                Console.ReadKey();
            }
            catch (InvalidOperationException)
            {
                // Ignora erro se o console não estiver aberto (por exemplo, se rodar via outro programa)
            }
        }
    }
}
