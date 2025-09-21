using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Doar
    {
        public int cd { get; set; }
        public string name { get; set; }

        public Doar()
        {
            cd = 0;
        }

        public Doar(int CD, string Nome)
        {
            cd = CD;
            name = Nome;
        }
    }
    internal class Voluntario
    {
        public string nome_sobrenome { get; set; }
        public int cd_usuario { get; set; }



        public Voluntario()
        {
            cd_usuario = 0;
        }

        public Voluntario(string Nome_sobrenome, int Cd_usuario)
        {
            Nome_sobrenome = nome_sobrenome;
            Cd_usuario = cd_usuario;
        }
    }


    internal class Transferencias_Online
    {
        public int cd_transparencia { get; set; }
        public string nome_transparencia { get; set; }

        public Transferencias_Online()
        {
            cd_transparencia = 0;
            nome_transparencia = string.Empty;
        }

        public Transferencias_Online(int CD_TRANSPARENCIA, string NOME_TRANSPARENCIA)
        {
            cd_transparencia = CD_TRANSPARENCIA;
            nome_transparencia = NOME_TRANSPARENCIA;
        }
    }

    internal class Transferencias_Anual
    {
        public int cd_Transparencia_Anual { get; set; }
        public string nome_Transparencia_Anual { get; set; }

        public Transferencias_Anual()
        {
            cd_Transparencia_Anual = 0;
            nome_Transparencia_Anual = string.Empty;
        }

        public Transferencias_Anual(int cd_Transparencia_Anual, string nome_Transparencia_Anual)
        {
            this.cd_Transparencia_Anual = cd_Transparencia_Anual;
            this.nome_Transparencia_Anual = nome_Transparencia_Anual;
        }


    }


}