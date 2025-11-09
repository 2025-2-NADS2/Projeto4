// frontend/src/App.jsx
import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom'; 


// ESTILOS DO HEADER (com a correção de largura)

const headerStyles = `
/* O header em si (fundo 100% branco) */
header {
  background-color: white;
  border-bottom: 1px solid #e9ecef;
}

/* O contentor interno que alinha o conteúdo */
.header-container {
  display: flex;
  justify-content: space-between; /* Logo à esquerda, links à direita */
  align-items: center;
  
  /* --- A CORREÇÃO ESTÁ AQUI --- */
  width: 100%; /* Força o contentor a ocupar 100% da largura */
  box-sizing: border-box; /* Faz o padding ser incluído no 100% */
  /* -------------------------- */
  
  padding: 1rem 2rem; /* Padding nas laterais (ajuste conforme o seu gosto) */
}

.logo-container img {
  height: 40px; 
}

/* O container para todos os botões/links de navegação */
.nav-links-container {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Espaço entre os botões */
}

/* O estilo base de TODOS os botões de navegação */
.nav-button {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  background-color: transparent;
  color: #212529;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: Arial, sans-serif;
}

/* Estilo de hover para botões normais */
.nav-button:hover {
  background-color: #f1f3f5;
}

/* A CLASSE ATIVA (fundo preto) */
.nav-button-active {
  background-color: #212529;
  color: white;
}

/* Botão especial "Área Restrita" (azul) */
.nav-button-special {
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
}

.nav-button-special:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
`;

// FIM DOS ESTILOS

function App() {
  return (
    <>
      {/* Injetamos o nosso CSS */}
      <style>{headerStyles}</style>

      <div className="app-container">
        
        <header>
          {/* --- O contentor agora ocupa 100% da largura --- */}
          <div className="header-container">

            {/* --- LOGO --- */}
            <div className="logo-container"> 
                <Link to="/">
                    <img 
                        src="/images/logo_alma.png" 
                        alt="Logo Instituto ALMA"
                    />
                </Link>
            </div>

            {/* --- LINKS DE NAVEGAÇÃO (AGORA COM NavLink) --- */}
            <div className="nav-links-container">
              
              <NavLink
                to="/"
                end 
                className={({ isActive }) =>
                  isActive ? 'nav-button nav-button-active' : 'nav-button'
                }
              >
                Início
              </NavLink>
              
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  isActive ? 'nav-button nav-button-active' : 'nav-button'
                }
              >
                Sobre
              </NavLink>
              
              <NavLink
                to="/colaborador"
                className={({ isActive }) =>
                  isActive ? 'nav-button nav-button-active' : 'nav-button'
                }
              >
                Colaborador
              </NavLink>
              
              <NavLink
                to="/como-doar"
                className={({ isActive }) =>
                  isActive ? 'nav-button nav-button-active' : 'nav-button'
                }
              >
                Como doar
              </NavLink>
              
              <NavLink
                to="/prestacao-de-contas"
                className={({ isActive }) =>
                  isActive ? 'nav-button nav-button-active' : 'nav-button'
                }
              >
                Prestação de contas
              </NavLink>
              
              {/* Link especial "Área Restrita" (sempre azul) */}
              <Link to="/register" className="nav-button nav-button-special">
                Área Restrita
              </Link>

            </div>
          
          </div> 
        </header>

        {/* --- CONTEÚDO DA PÁGINA --- */}
        <main>
          <Outlet />
        </main>

        {/* --- FOOTER (Sem mudanças) --- */}
        <footer>
          <div className="footerG">
            <div className="container">
              {/* ... (todo o seu conteúdo do footer) ... */}
              <div className="bloco1">
                <h3 className="titulo_footer">Instituto Alma</h3>
                <p className="left">Transformando vidas há mais de 15 anos <br />através de programas sociais que promovem dignidade, <br />educação e oportunidades para todos.</p>
                <div className="informacoesALMA">
                  <p className="left"><i className="fa-solid fa-location-dot"></i> Rua das Flores, 123 - Centro, São Paulo - SP</p>
                  <p className="left"><i className="fa-solid fa-phone"></i> (11) 1234-5678</p>
                  <p className="left"><i className="fa-solid fa-envelope"></i> contato@institutoalma.org.br</p>
                </div>
              </div>
              <div className="bloco2">
                <h3 className="titulo_footer">Links Rápidos</h3>
                <nav className="navL"><Link className="links" to="/sobre">Sobre Nós</Link></nav>
                <nav className="navL"><Link className="links" to="/como-doar">Como Doar</Link></nav>
                <nav className="navL"><Link className="links"to="/prestacao-de-contas">Prestação de Contas</Link></nav>
                <nav className="navL"><Link className="links" to="#">Seja Voluntário</Link></nav>
                <nav className="navL"><Link className="links" to="#">Contato</Link></nav>
              </div>
              <div className="divDireita">
                <div className="bloco3">
                  <h3 className="titulo_footer">Redes Sociais</h3>
                  <nav className="navB3"><i className="fa-brands fa-facebook-f"></i> <a href="https://www.facebook.com/almainstituto.oficial/">Facebook</a></nav>
                  <nav className="navB3"><i className="fa-brands fa-instagram"></i> <a href="https://www.instagram.com/almainstituto_oficial/">Instagram</a></nav>
                </div>
              </div>
            </div>
            <div className="linha"></div>
            <div className="ultimasinfo">
              <ul>
                <li><h6>© 2023 Instituto ALMA. Todos os direitos reservados.</h6></li>
              </ul>
              <ul>
                <li><h6>CNPJ: 12.345.678/0001-90</h6></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;