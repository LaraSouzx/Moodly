import './App.css';
import { Dashboard } from '../src/pages/dashboard/Dashboard';
import NovaEmocao from '../src/pages/novaEmocao/NovaEmocao'; // importe o novo componente
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Historico} from './pages/historico/Historico';
import {Configuracoes} from '../src/pages/configuracoes/Configuracoes';
import "bootstrap-icons/font/bootstrap-icons.css";
import  Login  from "../src/pages/logins/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/nova-emocao" element={<NovaEmocao />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
