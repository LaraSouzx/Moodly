import '../dashboard/style.css';
import Calendario from '../../components/Calendario/Calendario'; 
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Menu } from '../../components/menu/Menu';
import { useState } from 'react';
import { SaudacaoUsuario } from '../../components/SaudacaoUsuario/SaudacaoUsuario';

/**
 * Componente Dashboard
 *
 * Tela principal do sistema após login, que inclui:
 * - Saudação personalizada do usuário
 * - Calendário com emoções registradas
 * - Botão para adicionar nova emoção
 * - Menu lateral acessível via botão hambúrguer
 * - Elementos visuais decorativos em SVG
 *
 * @returns {JSX.Element} Interface da área principal do usuário logado
 */
export function Dashboard() {
  const [showNav, setShowNav] = useState(false); // Controle da visibilidade do menu lateral
  const navigate = useNavigate(); // Hook de navegação

  // Redireciona para a tela de adicionar nova emoção
  const handleAddEmotion = () => {
    navigate("/nova-emocao");
  };

  return (
    <div className="svg-container">
      
      {/* SVG decorativo azul */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="750"
        height="850"
        viewBox="0 0 744 960"
        fill="none"
        className="organicoum"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M223.504 5.31648C405.414 49.8968 350.251 339.67 459.04 492.28C532.643 595.529 712.513 603.971 738.729 728.071C766.908 861.461 677.243 989.684 585.38 1090.34C488.506 1196.48 367.019 1287.13 223.504 1292.61C75.535 1298.26 -85.6002 1242.85 -167.08 1119.08C-241.643 1005.81 -148.528 863.723 -148.12 728.071C-147.714 593.27 -226.362 459.268 -164.735 339.412C-83.5423 181.504 51.1848 -36.9133 223.504 5.31648Z"
          fill="#02C5C6"
        />
      </svg>
      
      {/* SVG decorativo verde */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="700"
        height="1000"
        viewBox="0 0 667 1024"
        fill="none"
        className="organicodois"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M202.558 -230.059C268.027 -317.315 378.042 -382.937 487.24 -383.093C599.273 -383.253 670.739 -239.273 782.476 -230.888C898.099 -222.211 1013.11 -401.665 1109.07 -336.427C1208.04 -269.144 1078.27 -83.0263 1145.55 15.9384C1214.97 118.039 1415.25 78.15 1467.12 190.17C1512.68 288.594 1429.37 406.347 1367.42 495.148C1310.77 576.355 1222.71 630.209 1132.16 670.325C1056.39 703.892 955.236 656.803 889.301 706.968C783.693 787.319 789.775 991.019 662.229 1027.86C557.067 1058.24 463.835 932.04 389.684 851.292C323.386 779.096 322.936 667.06 261.081 591.025C189.861 503.478 31.1155 486.73 4.03571 377.233C-21.9741 272.062 102.332 187.958 135.958 85.0923C169.737 -18.2399 137.336 -143.132 202.558 -230.059Z"
          fill="#B8DE6F"
        />
      </svg>
     
      {/* Saudação com nome do usuário */}
      <SaudacaoUsuario />

      {/* Calendário com dados das emoções */}
      <Calendario />

      {/* Botão para adicionar nova emoção */}
      <button className="add-emotion-button" onClick={handleAddEmotion}>+</button>

      {/* Botão de menu (hambúrguer) para mostrar/ocultar o menu lateral */}
      <buttom className="botao-menu">
        <GiHamburgerMenu size={28} onClick={() => setShowNav(!showNav)} />
      </buttom>

      {/* Exibição condicional do menu lateral */}
      {showNav && <Menu />}
    </div>
  );
}
