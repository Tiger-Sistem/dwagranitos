import React from "react";
import "./styles.css";

import Luminous from "../../assets/images/Exotic/1-Luminous-Quartzo.png";
import LuminousRetroiluminado from "../../assets/images/Exotic/2-Luminous-retroiluminado-Quartzo.png";
import Mirage from "../../assets/images/Exotic/3-Mirage-Marmore-Domolomítico.png";
import MacchiaOro from "../../assets/images/Exotic/4-Macchia-Oro-Marmore-Dolomitico.png";
import Imperiale from "../../assets/images/Exotic/5-Imperiale-Marmore-Dolomitico.png";
import Avorio from "../../assets/images/Exotic/6-Avorio-Marmore-Dolomitico.png";
import Monteviso from "../../assets/images/Exotic/7-Monteviso-Marmore-Dolomitico.png";
import CalacataDonatello from "../../assets/images/Exotic/8-Calacata-Donatello.png";
import Donatello from "../../assets/images/Exotic/9-Donatello-Venato.png";
import GrigioSavona from "../../assets/images/Exotic/10-Grigio-Savona.png";
import Verdant from "../../assets/images/Exotic/11-Verdant.png";
import Acquamare from "../../assets/images/Exotic/12-Acquamare.png";
import Turquesa from "../../assets/images/Exotic/13-Turquesa.png";
import PerlaSantana from "../../assets/images/Exotic/14-Perla-Santana.png";

export const Exotics = (): React.ReactElement => {
  return (
    <>
      <div>
        <h2 className="titulo">Linha Exóticos </h2>
      </div>
      <div className="imagensMaterialsDetails imgMaterial">
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Luminous</span> <br />
            <img className="imgCap" src={Luminous} alt="Imagem 1" />
          </div>
        </div>

        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Luminous Retroiluminado</span> <br />
            <img
              className="imgCap"
              src={LuminousRetroiluminado}
              alt="Imagem 1"
            />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Mirage</span> <br />
            <img className="imgCap" src={Mirage} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Macchia Oro</span> <br />
            <img className="imgCap" src={MacchiaOro} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Imperiale</span> <br />
            <img className="imgCap" src={Imperiale} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Avório</span> <br />
            <img className="imgCap" src={Avorio} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Monteviso</span> <br />
            <img className="imgCap" src={Monteviso} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Calacata Donatello</span> <br />
            <img className="imgCap" src={CalacataDonatello} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Donatello</span> <br />
            <img className="imgCap" src={Donatello} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Grigio Savona</span> <br />
            <img className="imgCap" src={GrigioSavona} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Verdant</span> <br />
            <img className="imgCap" src={Verdant} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Acquamare</span> <br />
            <img className="imgCap" src={Acquamare} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Turquesa</span> <br />
            <img className="imgCap" src={Turquesa} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Perla Santana</span> <br />
            <img className="imgCap" src={PerlaSantana} alt="Imagem 1" />
          </div>
        </div>
      </div>
    </>
  );
};
