import React from "react";
import "./Modal.css"; // ou onde estiver seu CSS

const formatarDataModal = (dataStr) => {
  const [ano, mes, dia] = dataStr.split("-");
  return `${dia}/${mes}/${ano.slice(2)}`;
};

const ModalHistorico = ({ data, emocao, anotacoes, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>

        <h2>Detalhes do Dia</h2>
       <p><strong>Data:</strong> {formatarDataModal(data)}</p>
        <p><strong>Emoção:</strong> {emocao}</p>
        <p><strong>Anotação:</strong> {anotacoes ? anotacoes: "Sem anotação."}</p>
      </div>
    </div>
  );
};

export default ModalHistorico;
