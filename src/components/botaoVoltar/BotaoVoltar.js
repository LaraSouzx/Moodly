// src/components/BotaoVoltar.js

import React from "react";
import { useNavigate } from "react-router-dom"; // Hook de navegação do React Router
import "./style.css";

/**
 * Componente BotaoVoltar
 *
 * Exibe um botão simples com uma seta para a esquerda.
 * Ao ser clicado, leva o usuário de volta para a página anterior no histórico de navegação.
 *
 * @returns {JSX.Element} Botão de voltar estilizado
 */
const BotaoVoltar = () => {
  const navigate = useNavigate(); // Hook para navegação programática

  return (
    <button
      className="botao-voltar" // Classe CSS para estilização
      onClick={() => navigate(-1)} // Volta uma página no histórico ao clicar
      title="Voltar" // Texto exibido ao passar o mouse
    >
      ← {/* Ícone visual de seta (pode ser substituído por SVG se quiser mais controle) */}
    </button>
  );
};

export default BotaoVoltar;
