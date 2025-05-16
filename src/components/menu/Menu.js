import '../menu/style.css';
import { FaHistory, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <div className="container-menu">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link active" to="/historico">
                        <FaHistory className="icon-historico" /> Histórico 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/configuracoes">
                        <FaCog className="icon-configuracoes" /> Configurações
                    </Link>
                </li>
            </ul>
        </div>
    );
};
