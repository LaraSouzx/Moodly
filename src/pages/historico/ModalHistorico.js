import React from "react";
import "./Modal.css";
import { EMOCOES } from "../../../src/components/barraEmocoes/BarraEmocoes";

const ModalHistorico = ({ data, emocao, texto, onClose }) => {
  const emoji = EMOCOES.find((e) => e.nome === emocao)?.emoji;
  return (
    <div className="modal-overlay">
      <div className="modal-conteudo">
        <button onClick={onClose} className="fechar">✖</button>
        <h3>{data}</h3>
        <h1>{emoji} {emocao}</h1>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default ModalHistorico;
