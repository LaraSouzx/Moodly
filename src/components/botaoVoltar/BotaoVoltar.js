// src/components/BotaoVoltar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BotaoVoltar = () => {
  const navigate = useNavigate();

  return (
    <button
      className="botao-voltar"
      onClick={() => navigate(-1)}
      title="Voltar"
    >
      ←
    </button>
  );
};

export default BotaoVoltar;
