import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilo global
import App from './App'; // Componente principal da aplicação
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos do Bootstrap

/**
 * Ponto de entrada da aplicação React
 *
 * Este arquivo inicializa o ReactDOM e renderiza o componente <App />
 * dentro da div com id "root" no HTML.
 */

// Cria a raiz React vinculada ao elemento HTML com id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação em modo estrito (ajuda a identificar problemas)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
