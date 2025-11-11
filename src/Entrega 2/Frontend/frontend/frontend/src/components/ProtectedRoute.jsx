// frontend/src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    // 1. Verifica se o token existe no localStorage
    const token = localStorage.getItem('token');

    // 2. Se NÃO houver token...
    if (!token) {
        // Redireciona o usuário para a página de login
        return <Navigate to="/login" replace />;
    }

    // 3. Se houver um token, renderiza o componente filho
    // (a página que estamos protegendo)
    return children;
}

export default ProtectedRoute;