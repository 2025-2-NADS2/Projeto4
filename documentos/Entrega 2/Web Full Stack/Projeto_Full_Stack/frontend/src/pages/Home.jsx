// frontend/src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles = `

/* Estilos do Logo (Secção 1) */
.section1-logo {
  width: 100%;
  max-width: 300px; 
  height: auto;
  margin-bottom: 2.5rem; 
}

.section3 {
  padding: 4rem 1.5rem 5rem 1.5rem; 
  background-color: #f8f9fa; 
  text-align: center;
}

.s3-content-wrapper {
  max-width: 611px; 
  margin: 0 auto; 
}

.s3-title {
  font-size: 2.2rem;
  color: #212529;
  margin-bottom: 0.8rem;
}

.s3-subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 2.5rem;
}

.main-image-container {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
}

.thumbnails-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 0.75rem;
}

.thumbnail-item {
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent; 
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative; 
  padding-bottom: 56.25%; /* Proporção 16:9 */
  height: 0; 
}

.thumbnail-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.thumbnail-item.active {
  border-color: #007bff; 
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4); 
}

.thumbnail-item img {
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  display: block;
}

/* Responsividade para o novo slider */
@media (max-width: 768px) {
  .s3-title {
    font-size: 1.8rem;
  }
  .s3-subtitle {
    font-size: 0.9rem;
  }
  .thumbnails-grid {
    grid-template-columns: repeat(3, 1fr); 
  }
}

`;

// FIM DOS ESTILOS

function Home() {
  
  // --- LÓGICA DO NOVO SLIDER ---
  const sliderImages = [
    '/images/slider/slide1.jpg',
    '/images/slider/slide2.jpg',
    '/images/slider/slide3.jpg',
    '/images/slider/slide4.jpg',
    '/images/slider/slide5.jpg'
  ];
  const [currentIndex, setCurrentIndex] = useState(0); 

  return (
    <>
      {/* Injetamos o nosso CSS */}
      <style>{styles}</style>

      {/* Section 1 da pagina > (Sem alterações no JSX) */}
      <section className="section1">
        
        <img 
          src="/images/LogoAlmaRemmove.png" 
          alt="Instituto Alma" 
          className="section1-logo"
        />
        
        <h1 className="h1_s1">Transformando Vidas, Construindo Futuro</h1>
        <p className="p_s1">Há mais de 15 anos trabalhando para levar esperança e oportunidades
          para comunidades em situação de vulnerabilidade social.</p>
        
        <div className="div_btn_s1">
          <Link to="/como-doar" className="btn_s1" id="btn-doacao">
            Faça sua doação
          </Link>
          <Link to="/sobre" className="btn_s1" id="btn-conheca">
            Conheça nosso trabalho
          </Link>
        </div>
      </section>

      {/* Section 2 da pagina > (Sem alterações) */}
      <section className="section2">
        <div className="div_s2">
          <div className="s2_superior">
            <h2>Nosso Impacto</h2>
            <p className="s2_st">Números que representam vidas transformadas e sonhos realizados</p>
          </div>
          <div className="s2_inferior">
            <div className="d1">
              <div className="dazul">2500+</div>
              <div className="t1"><p>Famílias Assistidas</p></div>
            </div>
            <div className="d1">
              <div className="dverde">850+</div>
              <div className="t1"><p>Jovens Capacitados</p></div>
            </div>
            <div className="d1">
              <div className="droxo">320+</div>
              <div className="t1"><p>Moradias Reformadas</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: SLIDER (JSX inalterado) --- */}
      <section className="section3">
        <div className="s3-content-wrapper">
          <h2 className="s3-title">Projetos Realizados</h2>
          <p className="s3-subtitle">Conheça alguns dos nossos principais projetos e o impacto que eles causaram na comunidade</p>

          {/* Imagem Principal */}
          <div className="main-image-container">
            <img 
              src={sliderImages[currentIndex]} 
              alt={`Projeto ${currentIndex + 1}`} 
              className="main-image" 
            />
          </div>

          {/* Miniaturas */}
          <div className="thumbnails-grid">
            {sliderImages.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={image} alt={`Miniatura ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FIM DO SLIDER --- */}

{/* Section 4 (Sem alterações) */}
      <section className="section4">
        <div className="div_s4">
          <div className="s4_superior">
            <h2>Onde Atuamos</h2>
            <p> Nossos programas são desenvolvidos para atender diferentes necessidades da comunidade</p>
          </div>
          <div className="s4_inferior">
            <div className="s4i">
              <div className="icone1"><i className="fa-regular fa-heart"></i></div>
              <h4>Assistência Social</h4>
              <p>Fornecemos apoio alimentar, vestimentas e cuidados básicos para famílias em situação de vulnerabilidade.</p>
            </div>
            <div className="s4i">
              <div className="icone2"><i className="fa-solid fa-book-open"></i></div>
              <h4>Educação</h4>
              <p>Oferecemos cursos profissionalizantes e reforço escolar para crianças e adolescentes da comunidade.</p>
            </div>
            <div className="s4i">
              <div className="icone3"><i className="fa-regular fa-house"></i></div>
              <h4>Moradia</h4>
              <p>Ajudamos famílias a conquistar moradia digna através de programas habitacionais e reformas.</p>
            </div>
            <div className="s4i">
              <div className="icone4"><i className="fa-solid fa-people-line"></i></div>
              <h4>Capacitação</h4>
              <p>Desenvolvemos programas de geração de renda e empreendedorismo para jovens e adultos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section5 (Sem alterações) */}
      <section className="section5">
        <div className="div_s5">
          <div className="s5_superior">
            <h2 className="h2_s5">Junte-se a Nós</h2>
            <p className="p_s5">Sua contribuição pode fazer a diferença na vida de muitas pessoas. <br /> 
              Seja um doador ou voluntário e ajude a transformar realidades.
            </p>
          </div>
          <div className="s5_inferior">
            <button className="btn_s5">Doar Agora</button>
            <button className="btn_s5">Seja Voluntário</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;