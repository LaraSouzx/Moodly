import './App.css';
import { Dashboard } from '../src/pages/dashboard/Dashboard';
import NovaEmocao from '../src/pages/novaEmocao/NovaEmocao'; // importe o novo componente
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/nova-emocao" element={<NovaEmocao />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
