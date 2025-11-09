// frontend/src/pages/Colaborador.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para os botões de link

const styles = `
.colab-page-container {
  font-family: Arial, sans-serif;
  color: #333;
}

/* --- 1. Hero Section (Imagem 1) --- */
.colab-hero {
  padding: 6rem 2rem;
  text-align: center;
  color: white; /* Cor padrão para todo o texto do hero */
  background-image: linear-gradient(to right, #A6E8DE, #72D6FD);
  text-shadow: 0 1px 3px rgba(0,0,0,0.25);
}
.colab-hero-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.colab-hero h2 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.colab-hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  opacity: 1; 
  color: white; 
}
.colab-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 0 0.5rem;
}
.colab-btn-white {
  background-color: white;
  color: #007bff;
  border: 1px solid white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1); 
}
.colab-btn-white:hover {
  background-color: transparent;
  color: white;
}
.colab-btn-green {
  background-color: #28a745;
  color: white;
  border: 1px solid #28a745;
}
.colab-btn-green:hover {
  background-color: #218838;
  border-color: #218838;
}

/* --- 2. "Por que ser?" (Imagem 1) --- */
.colab-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.colab-section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #212529;
}
.colab-section-subtitle {
  text-align: center;
  font-size: 1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
}
.colab-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
.colab-why-card {
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.colab-why-card .icon {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
}
.colab-why-card h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.colab-why-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

/* --- 3. Áreas de Atuação (Imagem 1) --- */
.colab-areas-section {
  background-color: #f8f9fa; /* Fundo cinza claro */
}
.colab-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.colab-area-card {
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.colab-area-card .icon {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 1rem;
}
.colab-area-card h4 {
  font-size: 1.15rem;
  margin-bottom: 1rem;
}
.colab-area-card p {
  font-size: 0.9rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
}
.colab-area-card ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.colab-area-card li {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
}
.colab-area-card li i {
  color: #28a745; /* Checkmark verde */
  margin-right: 0.5rem;
}

/* --- 4. "Pronto para Fazer?" (Imagem 2) --- */
.colab-ready-section {
  text-align: center;
  padding-top: 4rem;
}
.colab-ready-section .icon {
  font-size: 2.5rem;
  color: #007bff;
  background-color: #e6f0ff;
  border-radius: 50%;
  padding: 1rem;
  display: inline-block;
  margin-bottom: 1rem;
}
.colab-ready-section p {
  margin-bottom: 1.5rem;
}
.colab-ready-section .small-text {
  font-size: 0.8rem;
  color: #777;
  margin-top: 0.5rem;
}

/* --- 5. "Como Funciona?" Stepper (Imagem 2) --- */
.colab-stepper {
  display: flex;
  justify-content: space-around;
  text-align: center;
  max-width: 800px;
  margin: 3rem auto 4rem auto;
  position: relative;
}
.colab-stepper::before {
  content: '';
  position: absolute;
  top: 1.25rem;
  left: 15%;
  right: 15%;
  height: 2px;
  background-color: #e9ecef;
  z-index: 1;
}
.colab-step {
  position: relative;
  z-index: 2;
  background-color: white; /* Cor de fundo da página */
  padding: 0 1rem;
}
.colab-step-number {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #e6f0ff;
  color: #007bff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
  border: 4px solid white; /* Borda para cobrir a linha */
}
.colab-step p {
  font-weight: 600;
  color: #333;
}

/* --- 6. Requisitos & O que Oferecemos (Imagem 2) --- */
.colab-info-section {
  background-color: #f8f9fa;
}
.colab-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.colab-list-card {
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 2rem;
}
.colab-list-card h4 {
  font-size: 1.15rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
.colab-list-card h4 .icon {
  font-size: 1rem;
  color: #007bff;
  margin-right: 0.5rem;
}
.colab-list-card p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
}
.colab-list-card ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
.colab-list-card li {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.colab-list-card li i {
  color: #28a745;
  margin-right: 0.5rem;
}

/* --- 7. Impacto em Números (Imagem 2) --- */
.colab-impact-card {
  text-align: center;
  padding: 1rem;
}
.colab-impact-card .number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.colab-impact-card .number-1 { color: #28a745; }
.colab-impact-card .number-2 { color: #007bff; }
.colab-impact-card .number-3 { color: #6f42c1; }
.colab-impact-card .number-4 { color: #fd7e14; }
.colab-impact-card p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.75rem;
}
.colab-impact-card .bar {
  height: 4px;
  border-radius: 2px;
  width: 50px;
  margin: 0 auto;
}
.bar-1 { background-color: #28a745; }
.bar-2 { background-color: #007bff; }
.bar-3 { background-color: #6f42c1; }
.bar-4 { background-color: #fd7e14; }

/* --- Responsividade --- */
@media (max-width: 992px) {
  .colab-grid-4, .colab-grid-3, .colab-grid-2 {
    grid-template-columns: 1fr 1fr; /* 2 colunas em tablets */
  }
  .colab-stepper { background-color: transparent; } /* Ajuste para tablet */
}
@media (max-width: 768px) {
  .colab-hero h2 { font-size: 2.2rem; }
  .colab-grid-4, .colab-grid-3, .colab-grid-2 {
    grid-template-columns: 1fr; /* 1 coluna em telemóveis */
  }
  .colab-stepper { flex-direction: column; gap: 1rem; }
  .colab-stepper::before { display: none; }
  .colab-step-number { margin-bottom: 0.5rem; }
  .colab-step { background-color: transparent; }
}
`;

function Colaborador() {
  return (
    <>
      {/* Injetamos o nosso CSS */}
      <style>{styles}</style>

      <div className="colab-page-container">

        {/* --- 1. Hero Section --- */}
        <section className="colab-hero">
          <div className="colab-hero-icon"><i className="fas fa-shield-alt"></i></div>
          <h2>Seja um Colaborador do Instituto ALMA</h2>
          <p>Junte-se a nós na missão de transformar vidas e construir um futuro melhor para nossa comunidade. Sua dedicação faz toda a diferença.</p>
          <Link to="/register" className="colab-btn colab-btn-white">Tornar-se Colaborador &rarr;</Link>
        </section>

        {/* --- 2. "Por que ser?" --- */}
        <section className="colab-section">
          <h3 className="colab-section-title">Por que ser um Colaborador?</h3>
          <p className="colab-section-subtitle">Como colaborador do Instituto ALMA, você terá a oportunidade de contribuir diretamente para o desenvolvimento social e fazer parte de uma rede de pessoas comprometidas com a transformação social.</p>
          <div className="colab-grid-4">
            <div className="colab-why-card">
              <div className="icon"><i className="fas fa-hands-helping"></i></div>
              <h4>Impacto Social</h4>
              <p>Faça a diferença na vida de famílias e comunidades.</p>
            </div>
            <div className="colab-why-card">
              <div className="icon"><i className="fas fa-users"></i></div>
              <h4>Comunidade</h4>
              <p>Conecte-se com pessoas que compartilham os mesmos valores.</p>
            </div>
            <div className="colab-why-card">
              <div className="icon"><i className="fas fa-chart-line"></i></div>
              <h4>Desenvolvimento</h4>
              <p>Desenvolva habilidades pessoais e profissionais.</p>
            </div>
            <div className="colab-why-card">
              <div className="icon"><i className="fas fa-clock"></i></div>
              <h4>Flexibilidade</h4>
              <p>Horários flexíveis que se adaptam à sua rotina.</p>
            </div>
          </div>
        </section>

        {/* --- 3. Áreas de Atuação --- */}
        <section className="colab-section colab-areas-section">
          <h3 className="colab-section-title">Áreas de Atuação</h3>
          <p className="colab-section-subtitle">Escolha a área que mais combina com seu perfil e interesses. Cada ação social oferece diferentes oportunidades de contribuição.</p>
          <div className="colab-grid-3">
            {/* Card 1 */}
            <div className="colab-area-card">
              <div className="icon"><i className="fas fa-heart"></i></div>
              <h4>Assistência Social</h4>
              <p>Atividades principais:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Apoio direto às famílias</li>
                <li><i className="fas fa-check-circle"></i>Acompanhamento social</li>
                <li><i className="fas fa-check-circle"></i>Orientação familiar</li>
              </ul>
            </div>
            {/* Card 2 */}
            <div className="colab-area-card">
              <div className="icon"><i className="fas fa-book-open"></i></div>
              <h4>Educação e Capacitação</h4>
              <p>Atividades principais:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Desenvolvimento educacional</li>
                <li><i className="fas fa-check-circle"></i>Cursos profissionalizantes</li>
                <li><i className="fas fa-check-circle"></i>Alfabetização de adultos</li>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="colab-area-card">
              <div className="icon"><i className="fas fa-home"></i></div>
              <h4>Programa Habitacional</h4>
              <p>Atividades principais:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Melhoria das condições</li>
                <li><i className="fas fa-check-circle"></i>Reformas e manutenções</li>
                <li><i className="fas fa-check-circle"></i>Orientação técnica</li>
              </ul>
            </div>
            {/* Card 4 */}
            <div className="colab-area-card">
              <div className="icon"><i className="fas fa-briefcase"></i></div>
              <h4>Geração de Renda</h4>
              <p>Atividades principais:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Oficinas de artesanato</li>
                <li><i className="fas fa-check-circle"></i>Cursos diversos</li>
                <li><i className="fas fa-check-circle"></i>Orientação empresarial</li>
              </ul>
            </div>
            {/* Card 5 */}
            <div className="colab-area-card">
              <div className="icon"><i className="fas fa-brain"></i></div>
              <h4>Apoio Psicológico</h4>
              <p>Atividades principais:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Atendimentos individuais</li>
                <li><i className="fas fa-check-circle"></i>Grupos de apoio</li>
                <li><i className="fas fa-check-circle"></i>Terapias breves</li>
              </ul>
            </div>
            {/* Card 6 */}
            <div className="colab-area-card">
              <div className="icon"><i className="fas fa-utensils"></i></div>
              <h4>Distribuição de Alimentos</h4>
              <p>Atividades principais:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Arrecadação de doações</li>
                <li><i className="fas fa-check-circle"></i>Refeições comunitárias</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- 4. "Pronto para Fazer?" (Imagem 2) --- */}
        <section className="colab-section colab-ready-section">
          <div className="icon"><i className="fas fa-user-check"></i></div>
          <h3 className="colab-section-title">Pronto para Fazer a Diferença?</h3>
          <p className="colab-section-subtitle">Cadastre-se agora e comece sua jornada como colaborador do Instituto ALMA. Juntos, podemos transformar vidas e construir um futuro melhor para nossa comunidade.</p>
          <div>
            <Link to="/register" className="colab-btn colab-btn-green">Tornar-se Colaborador &rarr;</Link>
            <Link to="/login" className="colab-btn colab-btn-white">Acessar Minha Conta &rarr;</Link>
          </div>
          <p className="small-text">O cadastro é gratuito e leva apenas alguns minutos.</p>
        </section>

        {/* --- 5. "Como Funciona?" Stepper (Imagem 2) --- */}
        <section className="colab-section colab-stepper">
          <div className="colab-step">
            <div className="colab-step-number">1</div>
            <p>Cadastro rápido e simples</p>
          </div>
          <div className="colab-step">
            <div className="colab-step-number">2</div>
            <p>Escolha sua área de atuação</p>
          </div>
          <div className="colab-step">
            <div className="colab-step-number">3</div>
            <p>Comece a fazer a diferença</p>
          </div>
        </section>

        {/* --- 6. Requisitos & O que Oferecemos (Imagem 2) --- */}
        <section className="colab-section colab-info-section">
          <div className="colab-grid-2">
            <div className="colab-list-card">
              <h4><span className="icon"><i className="fas fa-tasks"></i></span> Requisitos Básicos</h4>
              <p>Para se tornar um colaborador, você precisa atender aos seguintes requisitos:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Ser maior de 18 anos</li>
                <li><i className="fas fa-check-circle"></i>Disponibilidade mínima de 4 horas por semana</li>
                <li><i className="fas fa-check-circle"></i>Comprometimento com os valores do Instituto ALMA</li>
                <li><i className="fas fa-check-circle"></i>Participar de reuniões mensais da equipe</li>
              </ul>
            </div>
            <div className="colab-list-card">
              <h4><span className="icon"><i className="fas fa-gift"></i></span> O que Oferecemos</h4>
              <p>Como colaborador, você terá acesso a:</p>
              <ul>
                <li><i className="fas fa-check-circle"></i>Treinamento e capacitação inicial</li>
                <li><i className="fas fa-check-circle"></i>Acompanhamento de um coordenador</li>
                <li><i className="fas fa-check-circle"></i>Certificados de participação</li>
                <li><i className="fas fa-check-circle"></i>Eventos de confraternização</li>
                <li><i className="fas fa-check-circle"></i>Oportunidades de desenvolvimento pessoal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- 7. Impacto em Números (Imagem 2) --- */}
        <section className="colab-section">
          <h3 className="colab-section-title">Nosso Impacto em Números</h3>
          <div className="colab-grid-4 colab-impact-grid">
            <div className="colab-impact-card">
              <div className="number number-1">150+</div>
              <p>Colaboradores Ativos</p>
              <div className="bar bar-1"></div>
            </div>
            <div className="colab-impact-card">
              <div className="number number-2">2.500+</div>
              <p>Pessoas Impactadas</p>
              <div className="bar bar-2"></div>
            </div>
            <div className="colab-impact-card">
              <div className="number number-3">8</div>
              <p>Áreas de Atuação</p>
              <div className="bar bar-3"></div>
            </div>
            <div className="colab-impact-card">
              <div className="number number-4">5</div>
              <p>Anos de História</p>
              <div className="bar bar-4"></div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Colaborador;