// frontend/src/pages/ComoDoar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


// ESTILOS DA PÁGINA "COMO DOAR"

const styles = `
.cd-page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: Arial, sans-serif;
  color: #333;
}

/* --- 1. Introdução --- */
.cd-intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem auto;
}
.cd-intro h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.cd-intro p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* --- 2. Título da Secção --- */
.cd-section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #212529;
}

/* --- 3. Formas de Doar (Grelha 3 colunas) --- */
.cd-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}
.cd-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}
.cd-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.cd-card .icon-doacao { color: #007bff; }
.cd-card .icon-banco { color: #28a745; }
.cd-card .icon-pix { color: #6f42c1; }

.cd-card h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.cd-card p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
}
.cd-button {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.cd-button-dark {
  background-color: #212529;
  color: white;
}
.cd-button-dark:hover {
  background-color: #343a40;
}
.cd-button-light {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}
.cd-button-light:hover {
  background-color: #e9ecef;
}

/* --- 4. Valores Sugeridos (Grelha 4 colunas) --- */
.cd-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.cd-valor-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%; /* Para alinhar os botões em baixo */
}
.cd-valor-card .preco {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}
.cd-valor-card .stext {
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 0.5rem;
}
.cd-valor-card .stext2 {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.4;
  margin-bottom: 1rem;
  flex-grow: 1; /* Empurra o resto para baixo */
}
.cd-valor-card .sImpacto {
  font-size: 0.8rem;
  font-weight: 600;
  color: #28a745; /* Verde */
  margin-bottom: 1rem;
}

/* --- 5. Dados Bancários --- */
.cd-dados-container {
  max-width: 700px;
  margin: 0 auto 4rem auto;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2.5rem;
  text-align: center;
}
.cd-dados-container p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
}
.cd-dados-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 1rem;
  text-align: left;
  margin-bottom: 2rem;
}
.cd-dados-item span {
  display: block;
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 0.25rem;
}
.cd-dados-item p {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}
.cd-dados-pix {
  text-align: center;
  border-top: 1px solid #e9ecef;
  padding-top: 2rem;
}
.cd-dados-pix span {
  font-size: 0.85rem;
  color: #777;
  display: block;
}
.cd-dados-pix p {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0.25rem 0 1.5rem 0;
  word-break: break-all;
}

/* --- 6. Outras Formas de Ajudar --- */
/* (Reutiliza .cd-grid-3 e .cd-card) */

/* --- 7. Transparência --- */
.cd-transparencia {
  background-color: #f0f5ff; /* Fundo azul muito claro */
  border: 1px solid #cce0ff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}
.cd-transparencia h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}
.cd-transparencia p {
  font-size: 0.9rem;
  color: #444;
  max-width: 600px;
  margin: 0 auto 1.5rem auto;
}

/* --- Responsividade --- */
@media (max-width: 992px) {
  .cd-grid-3 {
    grid-template-columns: 1fr;
  }
  .cd-grid-4 {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .cd-grid-4 {
    grid-template-columns: 1fr;
  }
  .cd-dados-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .cd-dados-item {
    padding-bottom: 1rem;
    border-bottom: 1px solid #e9ecef;
  }
  .cd-dados-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}
`;

// FIM DOS ESTILOS

function ComoDoar() {
  return (
    <>
      {/* Injetamos o nosso CSS */}
      <style>{styles}</style>

      <div className="cd-page-container">

        {/* --- 1. Introdução --- */}
        <section className="cd-intro">
          <h2>Como Doar</h2>
          <p>Sua doação é fundamental para continuarmos transformando vidas. Escolha a forma que for mais conveniente para você contribuir.</p>
        </section>

        {/* --- 2. Formas de Doar --- */}
        <h3 className="cd-section-title">Formas de Doar</h3>
        <section className="cd-grid-3">
          <div className="cd-card">
            <div className="icon icon-doacao"><i className="fas fa-credit-card"></i></div>
            <h4>Doação Online</h4>
            <p>Cartão de crédito, débito ou PIX</p>
            <button className="cd-button cd-button-dark">Doar Agora</button>
          </div>
          <div className="cd-card">
            <div className="icon icon-banco"><i className="fas fa-university"></i></div>
            <h4>Transferência Bancária</h4>
            <p>Depósito ou transferência direta</p>
            <button className="cd-button cd-button-dark">Ver Dados</button>
          </div>
          <div className="cd-card">
            <div className="icon icon-pix"><i className="fas fa-qrcode"></i></div>
            <h4>PIX</h4>
            <p>Forma rápida e segura</p>
            <button className="cd-button cd-button-dark">Copiar Chave</button>
          </div>
        </section>

        {/* --- 3. Valores Sugeridos --- */}
        <h3 className="cd-section-title">Valores Sugeridos</h3>
        <section className="cd-grid-4">
          <div className="cd-valor-card">
            <p className="preco">R$ 30</p>
            <p className="stext">Alimentação</p>
            <p className="stext2">Fornece uma cesta básica para uma família por uma semana.</p>
            <p className="sImpacto">Impacto: 1 família assistida</p>
            <button className="cd-button cd-button-light">Doar R$ 30</button>
          </div>
          <div className="cd-valor-card">
            <p className="preco">R$ 50</p>
            <p className="stext">Educação</p>
            <p className="stext2">Custeia material escolar para uma criança por um mês.</p>
            <p className="sImpacto">Impacto: 1 criança na escola</p>
            <button className="cd-button cd-button-light">Doar R$ 50</button>
          </div>
          <div className="cd-valor-card">
            <p className="preco">R$ 100</p>
            <p className="stext">Capacitação</p>
            <p className="stext2">Financia um curso profissionalizante para um jovem.</p>
            <p className="sImpacto">Impacto: 1 jovem capacitado</p>
            <button className="cd-button cd-button-light">Doar R$ 100</button>
          </div>
          <div className="cd-valor-card">
            <p className="preco">R$ 200</p>
            <p className="stext">Reforma</p>
            <p className="stext2">Contribui para melhorias habitacionais de uma família.</p>
            <p className="sImpacto">Impacto: 1 moradia melhorada</p>
            <button className="cd-button cd-button-light">Doar R$ 200</button>
          </div>
        </section>

        {/* --- 4. Dados Bancários --- */}
        <section className="cd-dados-container">
          <h3 className="cd-section-title" style={{ marginBottom: '1rem' }}>Dados Bancários</h3>
          <p>Para transferências e depósitos bancários</p>
          <div className="cd-dados-grid">
            <div className="cd-dados-item">
              <span>Banco:</span>
              <p>Banco do Brasil</p>
            </div>
            <div className="cd-dados-item">
              <span>Agência:</span>
              <p>1234-5</p>
            </div>
            <div className="cd-dados-item">
              <span>Conta Corrente:</span>
              <p>12345-6</p>
            </div>
            <div className="cd-dados-item">
              <span>CNPJ:</span>
              <p>12.345.678/0001-90</p>
            </div>
          </div>
          <div className="cd-dados-pix">
            <span>Chave PIX:</span>
            <p>12345678000190@pix.bb.com.br</p>
            <button className="cd-button cd-button-light">Copiar Chave PIX</button>
          </div>
        </section>

{/* --- 5. Outras Formas de Ajudar --- */}
<h3 className="cd-section-title">Outras Formas de Ajudar</h3>
        <section className="cd-grid-3">
          <div className="cd-card">
            <div className="icon icon-doacao"><i className="fas fa-box-open"></i></div>
            <h4>Doação de Materiais</h4>
            <p>Roupas, alimentos não perecíveis, móveis em bom estado.</p>
            {/* CORRIGIDO AQUI */}
            <button className="cd-button cd-button-light">Saiba Mais</button>
          </div>
          <div className="cd-card">
            <div className="icon icon-banco"><i className="fas fa-hands-helping"></i></div>
            <h4>Trabalho Voluntário</h4>
            <p>Dedique algumas horas do seu tempo para ajudar em nossos projetos.</p>
            {/* CORRIGIDO AQUI */}
            <button className="cd-button cd-button-light">Saiba Mais</button>
          </div>
          <div className="cd-card">
            <div className="icon icon-pix"><i className="fas fa-redo-alt"></i></div>
            <h4>Doação Recorrente</h4>
            <p>Torne-se um apoiador mensal e ajude de forma contínua.</p>
            {/* CORRIGIDO AQUI */}
            <button className="cd-button cd-button-light">Saiba Mais</button>
          </div>
        </section>

        {/* --- 6. Transparência --- */}
        <section className="cd-transparencia" style={{ marginTop: '4rem' }}>
          <h2>Transparência Total</h2>
          <p>Publicamos relatórios trimestrais detalhando como cada doação é utilizada. Sua confiança é nossa prioridade.</p>
          <Link to="/prestacao-de-contas" className="cd-button cd-button-light" style={{ maxWidth: '300px', margin: '0 auto' }}>
            Ver Relatórios Financeiros
          </Link>
        </section>

      </div>
    </>
  );
}

export default ComoDoar;