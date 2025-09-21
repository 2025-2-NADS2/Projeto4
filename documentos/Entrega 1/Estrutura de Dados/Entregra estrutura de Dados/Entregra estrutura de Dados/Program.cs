using Alma;
using ConsoleApp1;
using static Alma.Transparencia;

string resposta = "sim";

while (resposta.ToLower() == "sim")
{
    Console.WriteLine("Você quer saber sobre o que? Atividades ou Transparência:");
    string pergunta = Console.ReadLine().ToLower();

    if (pergunta == "atividades")
    {
        Console.WriteLine("Você quer saber sobre Doação ou Voluntariado?");
        string tipoAtividade = Console.ReadLine().ToLower();

        if (tipoAtividade == "doacao" || tipoAtividade == "doação")
        {
            // Criando doações
            Doacao[] doacoes = new Doacao[]
            {
                new Doacao(1, "DOAR 30R$ PARA ALIMENTAÇÃO"),
                new Doacao(2, "DOAR 50R$ PARA A EDUCAÇÃO"),
                new Doacao(3, "DOAR 100R$ PARA A CAPACITAÇÃO"),
                new Doacao(4, "DOAR 200R$ PARA A REFORMA")
            };

            foreach (var doacao in doacoes)
            {
                doacao.imprimir();
            }
        }
        else if (tipoAtividade == "voluntariado")
        {
            Trabalho_Voluntario[] tvoluntarios = new Trabalho_Voluntario[]
            {
                new Trabalho_Voluntario(1, "Arrecar brinquedos para as crianças", "Campanha solidária voltada para arrecadar brinquedos, com o objetivo de levar alegria e esperança para crianças em situação de vulnerabilidade social."),
                new Trabalho_Voluntario(2, "Montagens de Cesta Basicas", "Atividade dedicada à montagem de cestas básicas para famílias em situação de vulnerabilidade, garantindo acesso a alimentos e itens essenciais.")
            };

            foreach (var trabalho in tvoluntarios)
            {
                Console.WriteLine($"{trabalho.nome_sobrenome}");
                Console.WriteLine(" ");
                Console.WriteLine($"{trabalho.descricao}");
                Console.WriteLine("-----------------------------------------------");
            }
        }
        else
        {
            Console.WriteLine("Opção inválida. Digite 'Doacao' ou 'Voluntariado'.");
        }
    }
    else if (pergunta == "transparência" || pergunta == "transparencia")
    {
        Console.WriteLine("Qual Transparência você quer? Online ou Anual:");
        string tipoTrans = Console.ReadLine().ToLower();

        if (tipoTrans == "online")
        {
            Transferencia_Online[] registros = new Transferencia_Online[]
            {
                new Transferencia_Online(1, "Programas Sociais", "Ativo", "Doação", "Descrição programas sociais", 320450.00m),
                new Transferencia_Online(2, "Administrativo", "Ativo", "Doação", "Descrição administrativo", 320450.00m),
                new Transferencia_Online(3, "Captação", "Ativo", "Doação", "Descrição captação", 320450.00m),
                new Transferencia_Online(4, "Reserva de Emergência", "Ativo", "Doação", "Descrição reserva", 320450.00m)
            };

            foreach (var registro in registros)
            {
                Console.WriteLine($"{registro.cd_transparencia} - {registro.nome_transparencia}");
                Console.WriteLine($"Status: {registro.status_doacao}");
                Console.WriteLine($"Tipo: {registro.tipo_arrecadacao}");
                Console.WriteLine($"Descrição: {registro.descricao}");
                Console.WriteLine($"Valor: {registro.valorDoacoes:C}");
                Console.WriteLine("***************************");
            }
        }
        else if (tipoTrans == "anual")
        {
            Transparencia_Anual[] registros_ANUAL = new Transparencia_Anual[]
            {
                new Transparencia_Anual(1, "PDF ANUAL", "Ativo", "TransparenciaAnual.PDF", "Atualizar PDF"),
                new Transparencia_Anual(2, "PDF ANUAL", "Desativado", "TransparenciaAnual2,PDF", "Atualizar PDF")
            };

            foreach (var registro_ANUAL in registros_ANUAL)
            {
                Console.WriteLine($"{registro_ANUAL.cd_transparencia_anual} - {registro_ANUAL.nome_transparencia_anual}");
                Console.WriteLine($"Descricao: {registro_ANUAL.descricao_transparencia_anual}");
                Console.WriteLine($"Gerir: {registro_ANUAL.gerir_pdf}");
                Console.WriteLine($"Atualizar Sistema: {registro_ANUAL.atualizar_pdf}");
                Console.WriteLine("***************************");
            }
        }
        else
        {
            Console.WriteLine("Tipo de Transparência inválido. Digite 'Online' ou 'Anual'.");
        }
    }
    else
    {
        Console.WriteLine("Opção inválida. Digite 'Atividades' ou 'Transparência'.");
    }

    Console.WriteLine("Você quer perguntar sobre mais uma coisa? (sim/nao)");
    resposta = Console.ReadLine();
}

Console.WriteLine("Obrigado!");