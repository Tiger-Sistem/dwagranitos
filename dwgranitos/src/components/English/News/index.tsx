import React from "react";
import "./styles.css";

import imagem from "../../assets/images/banner1.jpg";

const News = () => {
  return (
    <div className="presentation-news">
      <h2 className="titulo">Últimas Notícias</h2>

      <div className="imagens">
        <img src={imagem} alt="Imagem 1" />
        <img src={imagem} alt="Imagem 2" />
        <img src={imagem} alt="Imagem 3" />
        {/* Adicione mais imagens conforme necessário */}
      </div>
    </div>
  );
};

export default News;
