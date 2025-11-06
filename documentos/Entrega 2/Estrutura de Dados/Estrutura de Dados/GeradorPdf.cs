using System;
using System.Collections.Generic;
using System.IO;
using PdfSharpCore.Pdf;
using PdfSharpCore.Drawing;

namespace Ent_EstrutuDados
{
    // classe que gera um pdf com as informacoes da transparencia
    public static class GeradorPdf
    {
        // cria o arquivo pdf de transparencia
        public static void GerarRelatorioTransparencia(List<DocumentoTransparencia> documentos, double totalGasto, string pastaSaida)
        {
            try
            {
                // Caminho do arquivo final vai gerar dentro da pasta do projeto
                string arquivoPdf = Path.Combine(pastaSaida, "relatorio_transparencia.pdf");

                // Cria um novo documento pdf
                PdfDocument document = new PdfDocument();

                // Adiciona uma página inicial
                PdfPage page = document.AddPage();

                // Permite desenhar textos e linhas dentro da página
                XGraphics gfx = XGraphics.FromPdfPage(page);

                // Define o tamanho e estilo
                XFont tituloFont = new XFont("Arial", 16, XFontStyle.Bold);
                XFont normalFont = new XFont("Arial", 10);
                XFont negritoFont = new XFont("Arial", 10, XFontStyle.Bold);

                // controle de posição vertical e margens
                double yPos = 40;
                double margem = 40;

                // cabecaldo do pdf
                gfx.DrawString("RELATÓRIO DE TRANSPARÊNCIA", tituloFont, XBrushes.Black,
                    new XRect(margem, yPos, page.Width - 2 * margem, 20), XStringFormats.Center);
                yPos += 40;

                gfx.DrawString($"Gerado em: {DateTime.Now:dd/MM/yyyy HH:mm}", normalFont, XBrushes.Black,
                    margem, yPos);
                yPos += 20;

                gfx.DrawString($"Total gasto: R$ {totalGasto:N2}", negritoFont, XBrushes.Black,
                    margem, yPos);
                yPos += 30;

                // cabecalho da tabela
                gfx.DrawString("Tipo", negritoFont, XBrushes.Black, margem, yPos);
                gfx.DrawString("Campanha", negritoFont, XBrushes.Black, margem + 80, yPos);
                gfx.DrawString("Valor", negritoFont, XBrushes.Black, margem + 300, yPos);
                gfx.DrawString("Data", negritoFont, XBrushes.Black, margem + 380, yPos);
                yPos += 20;

                // Linha horizontal separando o cabecalho
                gfx.DrawLine(XPens.Black, margem, yPos, page.Width - margem, yPos);
                yPos += 10;

                // conteudo relatorio
                foreach (var doc in documentos)
                {
                    // Se a pagina estiver cheia, cria uma nova página
                    if (yPos > page.Height - 60)
                    {
                        gfx.Dispose(); // Libera a antiga
                        page = document.AddPage(); // Cria nova página
                        gfx = XGraphics.FromPdfPage(page); // desenha de novo
                        yPos = 40; // Reseta posicao
                    }

                    // Escreve os dados de cada documento
                    gfx.DrawString(doc.Tipo, normalFont, XBrushes.Black, margem, yPos);
                    gfx.DrawString(doc.NomeCampanha, normalFont, XBrushes.Black, margem + 80, yPos);
                    gfx.DrawString($"R$ {doc.ValorGasto:N2}", normalFont, XBrushes.Black, margem + 300, yPos);
                    gfx.DrawString(doc.Data.ToString("dd/MM/yyyy"), normalFont, XBrushes.Black, margem + 380, yPos);

                    yPos += 20;
                }

                // Linha final e total geral
                gfx.DrawLine(XPens.Black, margem, page.Height - 40, page.Width - margem, page.Height - 40);
                gfx.DrawString($"Total Geral: R$ {totalGasto:N2}", negritoFont, XBrushes.Black,
                    new XRect(margem, page.Height - 30, page.Width - 2 * margem, 20), XStringFormats.Center);

                // Salva o arquivo pdf no disco
                document.Save(arquivoPdf);

                // Fecha o objeto grafico
                gfx.Dispose();

                Console.WriteLine($" Relatório PDF salvo em: {arquivoPdf}");
            }
            catch (Exception ex)
            {
                // Caso aconteca qualquer erro durante a geração
                Console.WriteLine($" Erro ao criar PDF: {ex.Message}");
            }
        }
    }
}
