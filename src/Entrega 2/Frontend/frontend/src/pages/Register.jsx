// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';


// ESTILOS (incorporados para garantir que funcionam)

const styles = `
.auth-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f0f2f5;
  font-family: Arial, sans-serif;
}
.auth-card {
  width: 100%;
  max-width: 400px;
  padding: 2.5rem 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.auth-icon-container {
  display: inline-block;
  padding: 1rem;
  background-color: #e6f0ff;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.auth-icon-container i {
  font-size: 2rem;
  color: #0056b3;
}
.auth-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  color: #333;
}
.auth-card .auth-subtitle {
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
}
.auth-form-group {
  margin-bottom: 1.25rem;
  text-align: left;
}
.auth-form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #444;
}
.auth-input-container {
  position: relative;
}
.auth-input-container i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}
.auth-form-group input {
  width: 100%;
  padding: 0.8rem 0.8rem 0.8rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}
.auth-button {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background-color: #212529;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.auth-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
.auth-button:hover:not(:disabled) {
  background-color: #343a40;
}
.auth-links {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}
.auth-links a {
  color: #0056b3;
  text-decoration: none;
  margin: 0 0.5rem;
}
.auth-links a:hover {
  text-decoration: underline;
}
.auth-feedback { margin-top: 1rem; }
.auth-feedback .loading { color: #555; }
.auth-feedback .error { color: red; font-weight: 600; }
.auth-feedback .success { color: green; font-weight: 600; }
`;

// FIM DOS ESTILOS

function Register() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(null);
        setSuccess(null);
        setLoading(true);

        try {
            const data = { nome, email, senha };
            await api.post('/auth/register', data);
            setLoading(false);
            setSuccess('Usuário registrado com sucesso! Você será redirecionado para o Login.');
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (err) {
            setLoading(false);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Ocorreu um erro ao tentar registrar. Tente novamente.');
            }
        }
    };

    return (
        <>
            {/* Injetamos o nosso CSS de teste */}
            <style>{styles}</style> 

            <div className="auth-page-container">
                <div className="auth-card">
                    
                    <div className="auth-icon-container">
                        <i className="fas fa-user-plus"></i>
                    </div>

                    <h2>Crie sua Conta</h2>
                    <p className="auth-subtitle">Registre-se para aceder à área administrativa</p>

                    <form onSubmit={handleSubmit}>
                        <div className="auth-form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <div className="auth-input-container">
                                <i className="fas fa-user"></i>
                                <input 
                                    type="text" 
                                    id="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Digite seu nome"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="auth-form-group">
                            <label htmlFor="email">Email</label>
                            <div className="auth-input-container">
                                <i className="fas fa-envelope"></i>
                                <input 
                                    type="email" 
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Digite seu email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="auth-form-group">
                            <label htmlFor="senha">Senha</label>
                            <div className="auth-input-container">
                                <i className="fas fa-lock"></i>
                                <input 
                                    type="password" 
                                    id="senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    placeholder="Crie uma senha"
                                    required
                                />
                            </div>
                        </div>

                        <div className="auth-feedback">
                            {loading && <p className="loading">Carregando...</p>}
                            {success && <p className="success">{success}</p>}
                            {error && <p className="error">{error}</p>}
                        </div>

                        <button type="submit" disabled={loading} className="auth-button">
                            {loading ? 'Registrando...' : 'Registrar'}
                        </button>
                    </form>
                </div>

                <div className="auth-links">
                    <Link to="/login">Já tem uma conta?</Link>
                    <span>|</span>
                    <Link to="/">Voltar para a Home</Link>
                </div>
            </div>
        </>
    );
}

export default Register;