import React from "react";
import "../botoesAcoes/style.css";

const BotoesAcoes = ({ onConfirmar, onCancelar }) => {
  return (
    <div className="botoes-acoes">
      <button className="botao-confirmar" onClick={onConfirmar}>
        <i className="bi bi-check-lg"></i>
      </button>
      <button className="botao-cancelar" onClick={onCancelar}>
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default BotoesAcoes;