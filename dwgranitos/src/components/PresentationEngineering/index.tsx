import React from "react";
import "./styles.css";

import imagem from "../../assets/images/banner1.jpg";
import Button from "../Button";

const PresentationEngineering = () => {
  return (
    <div className="presentation-engineering">
      <h2 className="titulo">Engenharia</h2>

      <p className="paragrafo">Texto do parágrafo centralizado</p>
      <div className="imagens">
        <img src={imagem} alt="Imagem 1" />
        <img src={imagem} alt="Imagem 2" />
        <img src={imagem} alt="Imagem 3" />
        {/* Adicione mais imagens conforme necessário */}
      </div>
      <Button buttonText="Mais Obras" />
    </div>
  );
};

export default PresentationEngineering;
