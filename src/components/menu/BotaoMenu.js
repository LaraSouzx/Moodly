import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../menu/style.css";

const BotaoMenu = ({ onClick }) => {
  return (
    <button className="botao-menu" onClick={onClick}>
      <GiHamburgerMenu size={28} />
    </button>
  );
};

export default BotaoMenu;
