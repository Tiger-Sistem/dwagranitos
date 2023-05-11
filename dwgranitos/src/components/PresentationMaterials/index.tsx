import React from "react";
import "./styles.css";

import imagem from "../../assets/images/banner1.jpg";
import Button from "../Button";

const PresentationMaterials = () => {
  return (
    <div className="presentation-materials">
      <hr className="linha" />
      <h2 className="titulo">Nossos Materiais</h2>

      <p className="paragrafo">Texto do parágrafo centralizado</p>
      <div className="imagens">
        <img src={imagem} alt="Imagem 1" />
        <img src={imagem} alt="Imagem 2" />
        <img src={imagem} alt="Imagem 3" />
        {/* Adicione mais imagens conforme necessário */}
      </div>
      <Button buttonText="Veja Nosso Catálogo" />
    </div>
  );
};

export default PresentationMaterials;