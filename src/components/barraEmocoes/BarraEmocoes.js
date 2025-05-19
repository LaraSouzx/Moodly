import React from "react";
import "../barraEmocoes/style.css";

const EMOCOES = [
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

const BarraEmocoes = ({ onSelecionar, selecionado }) => {
  return (
    <div className="barra-emocoes">
      {EMOCOES.map((emocao, index) => (
        <button
          key={index}
          className={`emoji-botao ${selecionado === emocao.nome ? "selecionado" : ""}`}
          onClick={() => onSelecionar(emocao.nome)}
          title={emocao.nome}
        >
          <span className="emoji">{emocao.emoji}</span>
        </button>
      ))}
    </div>
  );
};

export default BarraEmocoes;
