using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using System.Net;
using ConsoleApp1;
using static Alma.Transparencia;

namespace Alma
{

    internal class Doacao
    {
        public string nome;
        public int cd;

        public Doar[] doacoes { get; set; }
        private int tipoDoacao;

        public Doacao(int CD, String Nome)
        {
            nome = Nome;
            cd = CD;
            doacoes = new Doar[4];
            tipoDoacao = 0;
        }

        public bool addDoacao(int CD, String Nome)
        {
            Doar dis = new Doar(CD, Nome);
            doacoes[tipoDoacao] = dis;
            tipoDoacao++;
            return true;
        }


        public void imprimir()
        {
            Console.WriteLine(nome);
            for (int i = 0; i < tipoDoacao; i++)
            {
                Console.Write(doacoes[i].cd + "-");
                Console.WriteLine(doacoes[i].name);
                Console.WriteLine("***************************");
            }
        }



    }

    internal class Trabalho_Voluntario

    {
        public string nome_sobrenome;
        public int cd_usuario;
        public string descricao;
        public string img;

        public Voluntario[] tvoluntarios { get; set; }
        private int voluntariado;

        public Trabalho_Voluntario(int CD_usuario, string Nome_sobrenome, string Descricao)
        {
            nome_sobrenome = Nome_sobrenome;
            cd_usuario = CD_usuario;
            descricao = Descricao;
            img = string.Empty;//iremos adicionar o link aqui
            tvoluntarios = new Voluntario[3];
            voluntariado = 0;
        }

        public bool addVoluntario(int CD_usuario, string Nome_sobrenome)
        {
            Voluntario dis = new Voluntario(Nome_sobrenome, CD_usuario);
            tvoluntarios[voluntariado] = dis;
            voluntariado++;
            return true;
        }

        public void imprimir()
        {
            Console.WriteLine(nome_sobrenome);
            for (int i = 0; i < voluntariado; i++)
            {
                Console.Write(tvoluntarios[i].cd_usuario + "-");
                Console.WriteLine(tvoluntarios[i].nome_sobrenome);
                Console.WriteLine("***************************");
            }
        }
    }


    internal class Transparencia
    {
        public int cd_transparencia { get; set; }
        public string nome_transparencia { get; set; }
        public string status_doacao { get; set; }
        public string tipo_arrecadacao { get; set; }
        public string descricao { get; set; }
        public decimal valorDoacoes { get; set; } 

        public class Transferencia_Online
        {
            public Transferencias_Online[] trans { get; set; }
            private int tipotrans;
            public int cd_transparencia { get; set; }
            public string nome_transparencia { get; set; }
            public string status_doacao { get; set; }
            public string tipo_arrecadacao { get; set; }
            public string descricao { get; set; }
            public decimal valorDoacoes { get; set; }

            public Transferencia_Online()
            {
                cd_transparencia = 0;
                nome_transparencia = string.Empty;
                status_doacao = string.Empty;
                tipo_arrecadacao = string.Empty;
                descricao = string.Empty;
                valorDoacoes = 0m;
            }

            // Construtor com parâmetros
            public Transferencia_Online(int cd_transparencia, string nome_transparencia, string status_transparencia, string tipo_arrecadacao, string descricao, decimal valorDoacoes)
            {
                this.cd_transparencia = cd_transparencia;
                this.nome_transparencia = nome_transparencia;
                this.status_doacao = status_transparencia;
                this.tipo_arrecadacao = tipo_arrecadacao;
                this.descricao = descricao;
                this.valorDoacoes = valorDoacoes;
            }

            // Método de comparação por nome
            public bool Maior(Transferencia_Online disc)
            {
                return this.nome_transparencia.CompareTo(disc.nome_transparencia) > 0;
            }

            // Método de comparação por valor
            public bool MaiorValor(Transferencia_Online disc)
            {
                return this.valorDoacoes > disc.valorDoacoes;
            }

            public void imprimir()
            {
                Console.WriteLine(nome_transparencia);
                for (int i = 0; i < tipotrans; i++)
                {
                    Console.Write(trans[i].cd_transparencia + " ");
                    Console.WriteLine(trans[i].nome_transparencia);
                    Console.WriteLine("***************************");
                }
            }
        }
    }
    internal class Transparencia_Anual
    {
        public int cd_transparencia_anual { get; set; }
        public string nome_transparencia_anual { get; set; }
        public string descricao_transparencia_anual { get; set; }

        public string gerir_pdf { get; set; }
        public string atualizar_pdf { get; set; }

        public Transparencia_Anual[] trans { get; set; }
        private int tipotrans_anual;



        // Construtor padrão
        public Transparencia_Anual()
        {
            cd_transparencia_anual = 0;
            nome_transparencia_anual = string.Empty;
            descricao_transparencia_anual = string.Empty;
            gerir_pdf = string.Empty;
            atualizar_pdf = string.Empty;
        }

        // Construtor com parâmetros
        public Transparencia_Anual(int cd_transparencia_Anual, string nome_transparencia_Anual, string descricao_transparencia_Anual, string gerir_pdf, string atualizar_pdf)
        {
            this.cd_transparencia_anual = cd_transparencia_Anual;
            this.nome_transparencia_anual = nome_transparencia_Anual;
            this.descricao_transparencia_anual = descricao_transparencia_Anual;
            this.gerir_pdf = gerir_pdf;
            this.atualizar_pdf = atualizar_pdf;
        }

        // Método de comparação
        public bool Maior(Transparencia_Anual disc)
        {
            return this.nome_transparencia_anual.CompareTo(disc.nome_transparencia_anual) > 0;
        }

        // Método de impressão
        public void imprimir_Anual()
        {
            Console.WriteLine(nome_transparencia_anual);
            for (int i = 0; i < tipotrans_anual; i++)
            {
                Console.Write(trans[i].cd_transparencia_anual + " ");
                Console.WriteLine(trans[i].nome_transparencia_anual);
                Console.WriteLine("***************************");
            }
        }
    }

}