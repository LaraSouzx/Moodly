import React from "react";
import "./Modal.css"; // Estilo do modal (ajuste o caminho conforme necessário)

/**
 * Formata uma data no formato "YYYY-MM-DD" para "DD/MM/YY".
 *
 * @param {string} dataStr - Data no formato ISO (ex: "2025-05-22")
 * @returns {string} Data formatada no estilo brasileiro (ex: "22/05/25")
 */
const formatarDataModal = (dataStr) => {
  const [ano, mes, dia] = dataStr.split("-");
  return `${dia}/${mes}/${ano.slice(2)}`;
};

/**
 * Componente ModalHistorico
 *
 * Exibe um modal com detalhes de uma entrada do histórico de emoções.
 * Mostra a data, a emoção selecionada e anotações do dia.
 * Utiliza a classe personalizada "meu-modal-content" para evitar conflito
 * com a classe padrão do Bootstrap ("modal-content").
 *
 * @param {string} data - Data da entrada (formato ISO: "YYYY-MM-DD")
 * @param {string} emocao - Emoção registrada
 * @param {string} anotacoes - Texto escrito pelo usuário
 * @param {Function} onClose - Função chamada ao fechar o modal
 *
 * @returns {JSX.Element} Modal com os detalhes da entrada emocional
 */
const ModalHistorico = ({ data, emocao, anotacoes, onClose }) => {
  return (
    <div className="modal-overlay"> {/* Camada de fundo escurecida */}
      <div className="meu-modal-content"> {/* Caixa central com os detalhes */}

        {/* Botão de fechar o modal */}
        <button className="close-button" onClick={onClose}>X</button>

        {/* Conteúdo do modal */}
        <h2>Detalhes do Dia</h2>
        <p><strong>Data:</strong> {formatarDataModal(data)}</p>
        <p><strong>Emoção:</strong> {emocao}</p>
        <p><strong>Anotação:</strong> {anotacoes ? anotacoes : "Sem anotação."}</p>
      </div>
    </div>
  );
};

export default ModalHistorico;
