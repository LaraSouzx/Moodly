
import { GiHamburgerMenu } from "react-icons/gi"; // Ícone de menu (hambúrguer)
import "../menu/style.css"; // Estilo do botão

/**
 * Componente BotaoMenu
 *
 * Renderiza um botão de menu estilo "hambúrguer" com ícone da biblioteca react-icons.
 * Ao clicar, executa a função recebida por props (usualmente para abrir um menu lateral).
 *
 * @param {Function} onClick - Função executada ao clicar no botão
 * @returns {JSX.Element} Botão com ícone de menu
 */
const BotaoMenu = ({ onClick }) => {
  return (
    <button className="botao-menu" onClick={onClick}>
      {/* Ícone do menu (hambúrguer) com tamanho 28px */}
      <GiHamburgerMenu size={28} />
    </button>
  );
};

export default BotaoMenu;
