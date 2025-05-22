import React from "react";
import "./Modal.css"; // ou onde estiver seu CSS

const ModalHistorico = ({ data, emocao, texto, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>

        <h2>Detalhes do Dia</h2>
        <p><strong>Data:</strong> {data}</p>
        <p><strong>Emoção:</strong> {emocao}</p>
        <p><strong>Anotação:</strong> {texto ? texto : "Sem anotação."}</p>
      </div>
    </div>
  );
};

export default ModalHistorico;
