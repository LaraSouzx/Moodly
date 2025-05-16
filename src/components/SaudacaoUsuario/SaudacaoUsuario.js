import React from 'react';
import './style.css'; // você pode criar esse CSS para estilizar a saudação

export function SaudacaoUsuario({ nome }) {
  return (
    <div className="usuario-saudacao">
      <h2>Olá, {nome}</h2>
    </div>
  );
}
