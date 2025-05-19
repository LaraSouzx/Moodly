import React from "react";
import "../campoAnotacao/style.css";

const CampoAnotacao = ({ value, onChange }) => {
  return (
    <textarea
      className="campo-anotacao"
      placeholder="Escreva aqui como você está se sentindo..."
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default CampoAnotacao;
