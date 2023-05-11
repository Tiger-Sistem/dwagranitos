import React from "react";
import "./styles.css";

import imagem from "../../assets/images/banner1.jpg";
import Button from "../Button";

const PresentationPisos = () => {
  return (
    <div className="presentation-pisos">
      <h2 className="titulo">Pisos</h2>

      <p className="paragrafo">Texto do parágrafo centralizado</p>
      <div className="imagens">
        <img src={imagem} alt="Imagem 1" />
        <img src={imagem} alt="Imagem 2" />
        <img src={imagem} alt="Imagem 3" />
        {/* Adicione mais imagens conforme necessário */}
      </div>
    </div>
  );
};

export default PresentationPisos;
