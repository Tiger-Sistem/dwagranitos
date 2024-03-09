import React from "react";
import "./styles.css";

import PisoBegeBahia from "../../assets/images/piso/piso-bege-bahia.jpg";
import RodapePolido from "../../assets/images/piso/Rodapé-Em-Mármore-Polido-Branco-Comum-570x533.jpg";
import PisoElevado from "../../assets/images/piso/piso-elevado-em-sao-paulo.jpg";
import PisoGranito from "../../assets/images/piso/piso-granito-preco-m2_10972_152830_1556139099072_cover.png";

const PresentationPisos = () => {
  return (
    <div className="presentation-pisos">
      <h2 className="titulo">Pisos</h2>

      <p className="paragrafoPiso">
        Conheça aqui as diversas opções de cores, acabamentos e medidas - um
        produto ideal para cada tipo de aplicação.
      </p>
      <div className="imagensParagrafo granito">
        <img src={PisoBegeBahia} alt="Imagem 1" />
        <img src={RodapePolido} alt="Imagem 2" />
        <img src={PisoElevado} alt="Imagem 3" />
        <img src={PisoGranito} alt="Imagem 4" />
        {/* Adicione mais imagens conforme necessário */}
      </div>
    </div>
  );
};

export default PresentationPisos;
