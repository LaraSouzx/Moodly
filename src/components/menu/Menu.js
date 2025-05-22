import '../menu/style.css'; // Estilos específicos do menu lateral
import { FaHistory, FaCog } from 'react-icons/fa'; // Ícones de histórico e configurações
import { Link } from 'react-router-dom'; // Navegação por links

/**
 * Componente Menu
 *
 * Renderiza um menu lateral de navegação com links para:
 * - Histórico de emoções
 * - Página de configurações
 *
 * Usa ícones da biblioteca react-icons e navegação com React Router.
 *
 * @returns {JSX.Element} Estrutura de menu lateral com itens clicáveis
 */
export const Menu = () => {
  return (
    <div className="container-menu">
      <ul className="nav flex-column">
        {/* Item de navegação para a página de histórico */}
        <li className="nav-item">
          <Link className="nav-link active" to="/historico">
            <FaHistory className="icon-historico" /> Histórico
          </Link>
        </li>

        {/* Item de navegação para a página de configurações */}
        <li className="nav-item">
          <Link className="nav-link active" to="/configuracoes">
            <FaCog className="icon-configuracoes" /> Configurações
          </Link>
        </li>
      </ul>
    </div>
  );
};
