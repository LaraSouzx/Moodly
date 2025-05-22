import React from "react";
import "../barraEmocoes/style.css";

/**
 * Lista de emoções disponíveis para seleção.
 * Cada item possui:
 * - emoji: o símbolo gráfico da emoção
 * - nome: o identificador textual da emoção
 */
export const EMOCOES = [
  { emoji: "😊", nome: "feliz" },
  { emoji: "😔", nome: "triste" },
  { emoji: "😡", nome: "raiva" },
  { emoji: "😳", nome: "surpreso" },
  { emoji: "😌", nome: "aliviado" },
  { emoji: "😍", nome: "amor" },
  { emoji: "😖", nome: "frustrado" },
  { emoji: "😕", nome: "confuso" },
  { emoji: "😎", nome: "confiante" },
  { emoji: "😐", nome: "neutro" },
];

/**
 * Componente BarraEmocoes
 *
 * Renderiza uma barra de botões com emojis representando emoções.
 * Permite ao usuário selecionar uma emoção.
 *
 * @param {Function} onSelecionar - Função chamada ao clicar em uma emoção (retorna o nome da emoção selecionada)
 * @param {string} selecionado - Nome da emoção atualmente selecionada
 * @returns {JSX.Element} JSX da barra de emoções
 */
const BarraEmocoes = ({ onSelecionar, selecionado }) => {
  return (
    <div className="barra-emocoes">
      {/* Mapeia todas as emoções para botões */}
      {EMOCOES.map((emocao, index) => (
        <button
          key={index} // Identificador único para o React
          className={`emoji-botao ${selecionado === emocao.nome ? "selecionado" : ""}`} // Aplica estilo se estiver selecionado
          onClick={() => onSelecionar(emocao.nome)} // Chama função ao clicar no botão
          title={emocao.nome} // Mostra o nome da emoção ao passar o mouse
        >
          <span className="emoji">
            {emocao.emoji} {/* Exibe o emoji correspondente */}
          </span>
        </button>
      ))}
    </div>
  );
};

export default BarraEmocoes;
