import './App.css';

// Páginas da aplicação
import { Dashboard } from '../src/pages/dashboard/Dashboard';
import NovaEmocao from '../src/pages/novaEmocao/NovaEmocao';
import { Historico } from './pages/historico/Historico';
import { Configuracoes } from '../src/pages/configuracoes/Configuracoes';
import Login from "../src/pages/logins/Login";
import Cadastro from '../src/pages/cadastro/Cadastro';

// Estilos e bibliotecas externas
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// Roteamento
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Componente App
 *
 * Ponto de entrada da aplicação. Define as rotas principais usando React Router.
 * Cada rota exibe uma das páginas do sistema de registro emocional.
 *
 * @returns {JSX.Element} Aplicação com controle de rotas
 */
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página inicial de login */}
          <Route path="/" element={<Login />} />

          {/* Tela de cadastro */}
          <Route path="/cadastro" element={<Cadastro />} />

          {/* Página principal após login */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Registro de nova emoção */}
          <Route path="/nova-emocao" element={<NovaEmocao />} />

          {/* Histórico de emoções registradas */}
          <Route path="/historico" element={<Historico />} />

          {/* Página de configurações do usuário */}
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
