// frontend/src/pages/Sobre.jsx
import React from 'react';

const styles = `
.sobre-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: Arial, sans-serif;
  color: #333;
}

/* --- 1. Secção Intro --- */
.sobre-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem auto;
}
.sobre-intro h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.sobre-intro p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

/* --- 2. Grelha de Missão/Visão/Valores --- */
.sobre-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}
.sobre-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sobre-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
.sobre-card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.sobre-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}
.sobre-card p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}
/* Cores dos ícones */
.icon-missao { color: #007bff; }
.icon-visao { color: #28a745; }
.icon-valores { color: #6f42c1; }

/* --- 3. História & Timeline --- */
.sobre-historia {
  text-align: center;
  margin-bottom: 2rem;
}
.sobre-historia h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.sobre-historia p {
  max-width: 700px;
  margin: 0 auto;
  color: #555;
  line-height: 1.6;
}

.timeline-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  max-width: 900px;
  margin: 2rem auto 4rem auto;
}
.timeline-item {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 0.75rem 1rem;
}
.timeline-year {
  background-color: #e9ecef;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: 700;
  margin-right: 1rem;
}
.timeline-desc {
  font-size: 0.9rem;
  color: #444;
}

/* --- 4. Equipa --- */
.sobre-equipa {
  text-align: center;
  margin-bottom: 2rem;
}
.sobre-equipa h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}
.team-card {
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}
.team-avatar-placeholder {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #f1f3f5;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #adb5bd;
}
.team-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}
.team-card .team-title {
  font-size: 0.9rem;
  color: #007bff; /* Título a azul */
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.team-card .team-desc {
  font-size: 0.8rem;
  color: #777;
}

/* --- 5. Certificações --- */
.sobre-certificacoes {
  text-align: center;
  margin-bottom: 2rem;
}
.sobre-certificacoes h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.certs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  text-align: center;
}
.cert-item h4 {
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
}
.cert-item p {
  font-size: 0.9rem;
  color: #666;
}

/* --- Responsividade (Simples) --- */
@media (max-width: 992px) {
  .sobre-cards-grid {
    grid-template-columns: 1fr; /* 1 coluna em tablets */
  }
  .team-grid {
    grid-template-columns: 1fr 1fr; /* 2 colunas em tablets */
  }
  .timeline-container {
    grid-template-columns: 1fr; /* 1 coluna em tablets */
  }
}

@media (max-width: 576px) {
  .team-grid {
    grid-template-columns: 1fr; /* 1 coluna em telemóveis */
  }
  .certs-grid {
    grid-template-columns: 1fr; /* 1 coluna em telemóveis */
    gap: 2rem;
  }
  .sobre-intro h2 { font-size: 2rem; }
}
`;

// FIM DOS ESTILOS

function Sobre() {
  return (
    <>
      {/* Injetamos o nosso CSS */}
      <style>{styles}</style>

      <div className="sobre-container">
        
        {/* --- 1. Secção Intro --- */}
        <section className="sobre-intro">
          <h2>Sobre o Instituto ALMA</h2>
          <p>Somos uma organização sem fins lucrativos dedicada a transformar vidas através de programas sociais que promovem dignidade, educação e oportunidades para todos.</p>
        </section>

        {/* --- 2. Grelha de Missão/Visão/Valores --- */}
        <section className="sobre-cards-grid">
          <div className="sobre-card">
            <div className="sobre-card-icon icon-missao">
              <i className="fas fa-bullseye"></i> {/* Ícone de Missão */}
            </div>
            <h3>Missão</h3>
            <p>Promover o desenvolvimento social e humano de comunidades vulneráveis, oferecendo programas que garantam dignidade e oportunidades de crescimento.</p>
          </div>
          <div className="sobre-card">
            <div className="sobre-card-icon icon-visao">
              <i className="fas fa-eye"></i> {/* Ícone de Visão */}
            </div>
            <h3>Visão</h3>
            <p>Ser referência nacional em transformação social, criando um futuro onde todas as pessoas tenham acesso a oportunidades de desenvolvimento pleno.</p>
          </div>
          <div className="sobre-card">
            <div className="sobre-card-icon icon-valores">
              <i className="fas fa-gem"></i> {/* Ícone de Valores */}
            </div>
            <h3>Valores</h3>
            <p>Transparência, respeito à dignidade humana, compromisso social, inovação e sustentabilidade em todas as nossas ações.</p>
          </div>
        </section>

        {/* --- 3. História & Timeline --- */}
        <section className="sobre-historia">
          <h2>Nossa História</h2>
          <p>O Instituto ALMA nasceu em 2008 a partir da iniciativa de um grupo de voluntários que identificou a necessidade de apoiar famílias em situação de vulnerabilidade social na região metropolitana. Desde então, crescemos e evoluímos, sempre mantendo nosso compromisso com a transparência e o impacto real na vida das pessoas.</p>
        </section>
        
        <section className="timeline-container">
          <div className="timeline-item">
            <span className="timeline-year">2008</span>
            <span className="timeline-desc">Fundação do Instituto ALMA</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2010</span>
            <span className="timeline-desc">Primeiro programa de assistência alimentar</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2012</span>
            <span className="timeline-desc">Lançamento dos cursos profissionalizantes</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2016</span>
            <span className="timeline-desc">Programa habitacional implementado</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2019</span>
            <span className="timeline-desc">Expansão para 3 comunidades</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2023</span>
            <span className="timeline-desc">Marca de 2.500 famílias assistidas</span>
          </div>
        </section>

        {/* --- 4. Equipa --- */}
        <section className="sobre-equipa">
          <h2>Nossa Equipe</h2>
        </section>

        <section className="team-grid">
          <div className="team-card">
            <div className="team-avatar-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <h4>Maria Silva</h4>
            <p className="team-title">Diretora Executiva</p>
            <p className="team-desc">15 anos em ONGs</p>
          </div>
          <div className="team-card">
            <div className="team-avatar-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <h4>João Santos</h4>
            <p className="team-title">Coordenador de Projetos</p>
            <p className="team-desc">10 anos em gestão social</p>
          </div>
          <div className="team-card">
            <div className="team-avatar-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <h4>Ana Costa</h4>
            <p className="team-title">Assistente Social</p>
            <p className="team-desc">8 anos na área</p>
          </div>
          <div className="team-card">
            <div className="team-avatar-placeholder">
              <i className="fas fa-user"></i>
            </div>
            <h4>Carlos Oliveira</h4>
            <p className="team-title">Coordenador Financeiro</p>
            <p className="team-desc">12 anos em contabilidade</p>
          </div>
        </section>

        {/* --- 5. Certificações --- */}
        <section className="sobre-certificacoes">
          <h2>Certificações e Parcerias</h2>
        </section>

        <section className="certs-grid">
          <div className="cert-item">
            <h4>CNPJ</h4>
            <p>12.345.678/0001-90</p>
          </div>
          <div className="cert-item">
            <h4>Utilidade Pública</h4>
            <p>Certificado Municipal e Estadual</p>
          </div>
          <div className="cert-item">
            <h4>Parcerias</h4>
            <p>Prefeitura, Empresas Locais, Fundações</p>
          </div>
        </section>

      </div>
    </>
  );
}

export default Sobre;