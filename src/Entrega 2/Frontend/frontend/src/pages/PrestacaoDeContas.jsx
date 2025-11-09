// frontend/src/pages/PrestacaoDeContas.jsx
import React from 'react';
import { Link } from 'react-router-dom';


// ESTILOS DA PÁGINA "PRESTAÇÃO DE CONTAS"

const styles = `
.pc-page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: Arial, sans-serif;
  color: #333;
}

/* --- 1. Títulos de Secção --- */
.pc-intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
}
.pc-intro h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #212529;
}
.pc-intro p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}
.pc-section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #212529;
}

/* --- 2. Resumo Financeiro (Grelha 3 colunas) --- */
.pc-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.pc-stat-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}
.pc-stat-card .stat-number {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.pc-stat-card p {
  font-size: 0.9rem;
  color: #555;
}
/* Cores dos números */
.color-green { color: #28a745; }
.color-blue { color: #007bff; }
.color-purple { color: #6f42c1; }

/* --- 3. Aplicação de Recursos (Barras) --- */
.pc-recursos-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  margin-bottom: 4rem;
}
.pc-recursos-card h4 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}
.pc-recursos-card p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 2rem;
}
.progress-item {
  margin-bottom: 1.5rem;
}
.progress-labels {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
}
.progress-labels .categoria {
  font-size: 0.9rem;
  font-weight: 600;
}
.progress-labels .valores {
  font-size: 0.9rem;
  color: #555;
}
.progress-labels .valores span {
  font-weight: 700;
  color: #333;
  margin-left: 0.5rem;
}
.progress-bar-container {
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  background-color: #212529;
  border-radius: 4px;
}

/* --- 4. Relatórios Financeiros (Lista) --- */
.pc-relatorio-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
}
.pc-relatorio-card {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}
.pc-relatorio-card .icon {
  font-size: 1.5rem;
  color: #007bff;
  margin-right: 1.5rem;
}
.pc-relatorio-card .info {
  flex-grow: 1;
}
.pc-relatorio-card .info h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}
.pc-relatorio-card .info p {
  font-size: 0.9rem;
  color: #555;
  margin: 0 0 0.5rem 0;
}
.pc-relatorio-card .meta {
  font-size: 0.8rem;
  color: #777;
}
.pc-relatorio-card .meta span {
  margin-right: 0.75rem;
}
.pc-relatorio-card .download-btn {
  font-size: 0.9rem;
  font-weight: 600;
  color: #007bff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.pc-relatorio-card .download-btn:hover {
  background-color: #f8f9fa;
}
.pc-relatorio-card .download-btn i {
  margin-right: 0.5rem;
}

/* --- 5. Auditoria (Grelha 3 colunas) --- */
.pc-cert-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.pc-cert-card h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.pc-cert-card p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  flex-grow: 1; /* Empurra o botão para baixo */
  margin-bottom: 1.5rem;
}
.pc-link-btn {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: auto; /* Alinha o botão em baixo */
}
.pc-link-btn:hover {
  background-color: #e9ecef;
}

/* --- 6. Dúvidas --- */
.pc-duvidas-section {
  text-align: center;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2.5rem;
  margin-top: 4rem;
}
.pc-duvidas-section h3 {
  font-size: 1.5rem;
  color: #212529;
  margin-bottom: 0.75rem;
}
.pc-duvidas-section p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
}
.pc-duvidas-section .botoes {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.pc-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.pc-btn-dark {
  background-color: #212529;
  color: white;
  border: 1px solid #212529;
}
.pc-btn-dark:hover {
  background-color: #343a40;
}
.pc-btn-light {
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
}
.pc-btn-light:hover {
  background-color: #f8f9fa;
}

/* --- Responsividade --- */
@media (max-width: 992px) {
  .pc-grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .pc-relatorio-card {
    flex-direction: column;
    text-align: center;
  }
  .pc-relatorio-card .info {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .pc-relatorio-card .meta {
    margin-bottom: 1.5rem;
  }
  .pc-relatorio-card .icon {
    margin: 0;
  }
  .pc-duvidas-section .botoes {
    flex-direction: column;
  }
}
`;
// ==========================================================
// FIM DOS ESTILOS
// ==========================================================


function PrestacaoDeContas() {
  return (
    <>
      {/* Injetamos o nosso CSS */}
      <style>{styles}</style>

      <div className="pc-page-container">

        {/* --- 1. Introdução --- */}
        <section className="pc-intro">
          <h2>Prestação de Contas</h2>
          <p>Mantemos total transparência sobre como os recursos são aplicados. Confira nossos relatórios financeiros e o impacto gerado.</p>
        </section>

        {/* --- 2. Resumo Financeiro --- */}
        <h3 className="pc-section-title">Resumo Financeiro 2023</h3>
        <section className="pc-grid-3">
          <div className="pc-stat-card">
            <div className="stat-number color-green">R$ 485.720,00</div>
            <p>Total Recebido</p>
          </div>
          <div className="pc-stat-card">
            <div className="stat-number color-blue">R$ 456.890,00</div>
            <p>Total Aplicado</p>
          </div>
          <div className="pc-stat-card">
            <div className="stat-number color-purple">R$ 28.830,00</div>
            <p>Reserva</p>
          </div>
        </section>

        {/* --- 3. Aplicação de Recursos --- */}
        <h3 className="pc-section-title">Aplicação de Recursos</h3>
        <section className="pc-recursos-card">
          <h4>Distribuição por Categoria</h4>
          <p>Como os recursos foram aplicados em 2023</p>

          <div className="progress-item">
            <div className="progress-labels">
              <span className="categoria">Programas Sociais</span>
              <span className="valores">R$ 320.450,00 <span>70%</span></span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-labels">
              <span className="categoria">Administrativo</span>
              <span className="valores">R$ 68.533,00 <span>15%</span></span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '15%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-labels">
              <span className="categoria">Captação de Recursos</span>
              <span className="valores">R$ 45.689,00 <span>10%</span></span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '10%' }}></div>
            </div>
          </div>
          <div className="progress-item">
            <div className="progress-labels">
              <span className="categoria">Reserva de Emergência</span>
              <span className="valores">R$ 22.218,00 <span>5%</span></span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '5%' }}></div>
            </div>
          </div>
        </section>

        {/* --- 4. Relatórios Financeiros --- */}
        <h3 className="pc-section-title">Relatórios Financeiros</h3>
        <section className="pc-relatorio-list">
          <div className="pc-relatorio-card">
            <div className="icon"><i className="fas fa-file-pdf"></i></div>
            <div className="info">
              <h4>Relatório Anual 2023</h4>
              <p>Demonstrações financeiras e relatório de atividades completo</p>
              <div className="meta">
                <span>Janeiro 2024</span> •
                <span>PDF</span> •
                <span>2.4 MB</span>
              </div>
            </div>
            <a href="#" className="download-btn">
              <i className="fas fa-download"></i> Download
            </a>
          </div>
          <div className="pc-relatorio-card">
            <div className="icon"><i className="fas fa-file-pdf"></i></div>
            <div className="info">
              <h4>Balanço 4º Trimestre 2023</h4>
              <p>Receitas, despesas e aplicação de recursos</p>
              <div className="meta">
                <span>Dezembro 2023</span> •
                <span>PDF</span> •
                <span>1.8 MB</span>
              </div>
            </div>
            <a href="#" className="download-btn">
              <i className="fas fa-download"></i> Download
            </a>
          </div>
          <div className="pc-relatorio-card">
            <div className="icon"><i className="fas fa-file-pdf"></i></div>
            <div className="info">
              <h4>Relatório de Impacto 2023</h4>
              <p>Resultados e métricas dos programas executados</p>
              <div className="meta">
                <span>Dezembro 2023</span> •
                <span>PDF</span> •
                <span>3.1 MB</span>
              </div>
            </div>
            <a href="#" className="download-btn">
              <i className="fas fa-download"></i> Download
            </a>
          </div>
        </section>

        {/* --- 5. Auditoria e Certificações --- */}
        <h3 className="pc-section-title">Auditoria e Certificações</h3>
        <section className="pc-grid-3">
          <div className="pc-cert-card">
            <h4>Auditoria Externa</h4>
            <p>Nossas contas são auditadas anualmente por empresa independente</p>
            <a href="#" className="pc-link-btn">Auditoria 2023 ↗</a>
          </div>
          <div className="pc-cert-card">
            <h4>Certificação CNAS</h4>
            <p>Certificado de Entidade Beneficente de Assistência Social</p>
            <a href="#" className="pc-link-btn">Válido até 2025</a>
          </div>
          <div className="pc-cert-card">
            <h4>Selo de Transparência</h4>
            <p>Reconhecimento pela transparência na prestação de contas</p>
            <a href="#" className="pc-link-btn">Certificado 2023</a>
          </div>
        </section>

        {/* --- 6. Dúvidas --- */}
        <section className="pc-duvidas-section">
          <h3>Dúvidas sobre Prestação de Contas?</h3>
          <p>Nossa equipe está disponível para esclarecer qualquer questão sobre a aplicação dos recursos e relatórios financeiros.</p>
          <div className="botoes">
            <a href="#" className="pc-btn pc-btn-dark">Entre em Contato</a>
            <a href="#" className="pc-btn pc-btn-light">Agendar Reunião</a>
          </div>
        </section>

      </div>
    </>
  );
}

export default PrestacaoDeContas;