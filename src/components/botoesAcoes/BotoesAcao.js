
import "../botoesAcoes/style.css";

/**
 * Componente BotoesAcoes
 *
 * Renderiza dois botões de ação:
 * - Um botão de confirmação (ícone de check)
 * - Um botão de cancelamento (ícone de X)
 *
 * @param {Function} onConfirmar - Função chamada ao clicar no botão de confirmar
 * @param {Function} onCancelar - Função chamada ao clicar no botão de cancelar
 * @returns {JSX.Element} Conjunto de botões de ação
 */
const BotoesAcoes = ({ onConfirmar, onCancelar }) => {
  return (
    <div className="botoes-acoes"> {/* Contêiner dos botões de ação */}
      <button className="botao-confirmar" onClick={onConfirmar}>
        {/* Ícone de check (usando Bootstrap Icons) */}
        <i className="bi bi-check-lg"></i>
      </button>
      
      <button className="botao-cancelar" onClick={onCancelar}>
        {/* Ícone de X (usando Bootstrap Icons) */}
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default BotoesAcoes;
