// frontend/src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api'; // Nosso axios

function Dashboard() {
    const navigate = useNavigate();

    // --- ESTADOS DA LISTA DE NOTÍCIAS ---
    const [noticias, setNoticias] = useState([]); 
    const [loadingNoticias, setLoadingNoticias] = useState(true);
    const [errorNoticias, setErrorNoticias] = useState(null);

    // --- NOVOS ESTADOS PARA O FORMULÁRIO ---
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState(null); // Estado para o ARQUIVO da imagem
    const [loadingForm, setLoadingForm] = useState(false);
    const [errorForm, setErrorForm] = useState(null);
    const [successForm, setSuccessForm] = useState(null);


    // --- EFEITO PARA BUSCAR DADOS (useEffect) ---
    // (Esta função é chamada para recarregar a lista)
    const fetchNoticias = async () => {
        try {
            setLoadingNoticias(true);
            const response = await api.get('/noticias');
            setNoticias(response.data);
            setLoadingNoticias(false);
        } catch (err) {
            console.error("Erro ao buscar notícias:", err);
            setErrorNoticias('Falha ao carregar notícias. Tente novamente.');
            setLoadingNoticias(false);
        }
    };

    // Roda a busca de notícias UMA VEZ quando o componente carrega
    useEffect(() => {
        fetchNoticias(); 
    }, []); // O array vazio [] garante que isso rode só uma vez

    // --- NOVA FUNÇÃO: Handle para o Upload da Imagem ---
    const handleFileChange = (e) => {
        setImagem(e.target.files[0]); // Pega o primeiro arquivo selecionado
    };

    // --- NOVA FUNÇÃO: Handle para o Submit do Formulário ---
    const handlePostNoticia = async (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        
        // Validação simples
        if (!titulo || !descricao || !imagem) {
            setErrorForm('Por favor, preencha todos os campos e selecione uma imagem.');
            return;
        }

        setLoadingForm(true);
        setErrorForm(null);
        setSuccessForm(null);

        // 1. Precisamos usar 'FormData' para enviar arquivos
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descricao', descricao);
        formData.append('imagem', imagem); // 'imagem' é o nome do campo que o Multer espera

        try {
            await api.post('/noticias', formData, {
                headers: {
                    // Precisamos avisar o axios que é 'multipart/form-data'
                    'Content-Type': 'multipart/form-data',
                },
            });

            // 3. Se deu certo
            setLoadingForm(false);
            setSuccessForm('Notícia postada com sucesso!');
            
            // 4. Limpa o formulário
            setTitulo('');
            setDescricao('');
            setImagem(null);
            document.getElementById('imagem-input').value = null; // Limpa o campo de arquivo

            // 5. ATUALIZA a lista de notícias
            fetchNoticias();

        } catch (err) {
            setLoadingForm(false);
            setErrorForm('Erro ao postar notícia. Verifique o console (F12).');
            console.error("Erro ao postar notícia:", err);
        }
    };

    // --- FUNÇÃO DE LOGOUT (Sem mudanças) ---
    const handleLogout = () => {
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = null;
        navigate('/login');
    };

    // --- RENDERIZAÇÃO ---
    return (
        <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Painel de Controle</h1>
                <button 
                    onClick={handleLogout} 
                    style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Fazer Logout
                </button>
            </header>

            <hr style={{ margin: '2rem 0' }} />

            {/* --- SEÇÃO DE POSTAGEM (AGORA COM O FORMULÁRIO) --- */}
            <section>
                <h2>Criar Nova Notícia</h2>
                <form onSubmit={handlePostNoticia}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Título:</label><br />
                        <input 
                            type="text" 
                            value={titulo} 
                            onChange={(e) => setTitulo(e.target.value)} 
                            style={{ width: '100%', padding: '0.5rem' }} 
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Descrição:</label><br />
                        <textarea 
                            value={descricao} 
                            onChange={(e) => setDescricao(e.target.value)} 
                            style={{ width: '100%', padding: '0.5rem', minHeight: '100px' }} 
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Imagem (JPG ou PNG):</label><br />
                        <input 
                            type="file" 
                            id="imagem-input"
                            accept="image/png, image/jpeg"
                            onChange={handleFileChange} 
                        />
                    </div>
                    
                    {/* Feedback do Formulário */}
                    {loadingForm && <p>Postando...</p>}
                    {errorForm && <p style={{ color: 'red' }}>{errorForm}</p>}
                    {successForm && <p style={{ color: 'green' }}>{successForm}</p>}

                    <button type="submit" disabled={loadingForm} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
                        {loadingForm ? 'Enviando...' : 'Postar Notícia'}
                    </button>
                </form>
            </section>

            <hr style={{ margin: '2rem 0' }} />

            {/* --- SEÇÃO DA LISTA DE NOTÍCIAS (Sem mudanças) --- */}
            <section>
                <h2>Notícias Atuais</h2>
                {loadingNoticias && <p>Carregando notícias...</p>}
                {errorNoticias && <p style={{ color: 'red' }}>{errorNoticias}</p>}
                
                {!loadingNoticias && !errorNoticias && noticias.length > 0 && (
                    <div id="lista-noticias">
                        {noticias.map(noticia => (
                            <div key={noticia.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
                                <h3>{noticia.titulo}</h3>
                                <p>{noticia.descricao}</p>
                                <p><small>Arquivo da Imagem: {noticia.imagem_url}</small></p>
                            </div>
                        ))}
                    </div>
                )}
                
                {!loadingNoticias && !errorNoticias && noticias.length === 0 && (
                    <p>Nenhuma notícia encontrada.</p>
                )}
            </section>
        </div>
    );
}

export default Dashboard;