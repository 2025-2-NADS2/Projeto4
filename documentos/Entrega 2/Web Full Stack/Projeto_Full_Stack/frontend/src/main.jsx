// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import api from './services/api'; // <-- 1. IMPORTAMOS O 'api' (AXIOS)

// --- NOSSAS PÁGINAS DE CONTEÚDO ---
import App from './App.jsx';
import Home from './pages/Home.jsx';
import ComoDoar from './pages/ComoDoar.jsx';
import Sobre from './pages/Sobre.jsx';
import Colaborador from './pages/Colaborador.jsx';
import PrestacaoDeContas from './pages/PrestacaoDeContas.jsx';

// --- NOSSAS PÁGINAS DE AUTENTICAÇÃO ---
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

// --- NOSSAS PÁGINAS PROTEGIDAS ---
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'; 

// Nosso CSS Global
import './index.css'; 

// ===============================================
// LÓGICA DE INICIALIZAÇÃO DE TOKEN (A CORREÇÃO!)
// ===============================================
// Isto corre ASSIM que o app carrega
const token = localStorage.getItem('token');
if (token) {
  // Se encontrarmos um token, configuramos o Axios para usá-lo em
  // TODAS as requisições futuras, antes mesmo do React renderizar.
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
// ===============================================

// Definição de todas as rotas da aplicação
const router = createBrowserRouter([
  {
    // Rotas que usam o Layout Principal (com Header/Footer)
    path: '/',
    element: <App />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/como-doar', element: <ComoDoar /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/colaborador', element: <Colaborador /> },
      { path: '/prestacao-de-contas', element: <PrestacaoDeContas /> },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    // Rotas que NÃO usam o Layout Principal (têm tela cheia)
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

// Renderiza a aplicação
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);