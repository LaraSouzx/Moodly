import React from "react";
import "../campoAnotacao/style.css";

/**
 * Componente CampoAnotacao
 *
 * Renderiza um campo de texto (textarea) para que o usuário escreva anotações
 * sobre como está se sentindo.
 *
 * @param {string} value - Texto atual do campo de anotação
 * @param {Function} onChange - Função chamada sempre que o valor do texto for alterado
 * @returns {JSX.Element} Área de texto estilizada para entrada do usuário
 */
const CampoAnotacao = ({ value, onChange }) => {
  return (
    <textarea
      className="campo-anotacao" // Classe CSS para estilização do campo
      placeholder="Escreva aqui como você está se sentindo..." // Texto que aparece quando o campo está vazio
      value={value} // Valor atual controlado do textarea
      onChange={onChange} // Chamada quando o usuário digita algo
    ></textarea>
  );
};

export default CampoAnotacao;
