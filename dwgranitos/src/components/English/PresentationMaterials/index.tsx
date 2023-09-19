import React from "react";
import "./styles.css";

import Button from "../Button";
import AmareloFlorença from "../../../assets/images/material/Amarelo-Florença-1024x683.jpg";
import AmareloVitoria from "../../../assets/images/material/Amarelo-Vitória-1024x683.jpg";
import Arabescato from "../../../assets/images/material/Arabescato-1024x683.jpg";
import Arabesco from "../../../assets/images/material/Arabesco-1024x683.jpg";
import BegePrimeLiso from "../../../assets/images/material/Bege-Prime-Liso-1024x683.jpg";
import BegePrimeParadise from "../../../assets/images/material/Bege-Prime-Paradise-1024x683.jpg";
import BrancoFortaleza from "../../../assets/images/material/Branco-Fortaleza-1024x683.jpg";
import BrancoPrime from "../../../assets/images/material/Branco-Prime-1024x683.jpg";
// -------------------------------------------------
import MarromTabaco from "../../../assets/images/material/Marrom-Tabaco-1024x683.jpg";
import OrnamentalValcélio from "../../../assets/images/material/Ornamental-Valcélio-1024x683.jpg";
import PretoSantaAngélica from "../../../assets/images/material/Preto-Santa-Angélica-1024x683.jpg";
import PretoViaLactea from "../../../assets/images/material/Preto-Via-Lactea-1024x683.jpg";
// -------------------------------------------------
import SuperPrime from "../../../assets/images/material/Super-Prime-1024x683.jpg";
import Supernano from "../../../assets/images/material/Supernano-1024x683.jpg";
import VerdeUbatuba from "../../../assets/images/material/Verde-Ubatuba-1024x683.jpg";
import amarelocapri from "../../../assets/images/material/amarelo-capri-1.png";
// -------------------------------------------------
import amareloicarai from "../../../assets/images/material/amarelo-icarai.jpg";
import amarelomaracuja from "../../../assets/images/material/amarelo-maracuja.jpg";
import amarelosantacecilia from "../../../assets/images/material/amarelo-santa-cecilia.jpg";
import begebahia from "../../../assets/images/material/bege-bahia.jpg";

const PresentationMaterials = () => {
  return (
    <div className="presentation-materials">
      <hr className="linha" />
      <h2 className="titulo">Our materials</h2>

      <p className="paragrafoMaterials">
        Our materials in marble, granite, quartz, and more offer the perfect
        combination of beauty, durability, and versatility, providing
        sophisticated and elegant solutions for all your projects.
      </p>
      <div className="imagensMaterials ">
        <img src={AmareloFlorença} alt="Imagem 1" />
        <img src={AmareloVitoria} alt="Imagem 2" />
        <img src={Arabescato} alt="Imagem 3" />
        <img src={Arabesco} alt="Imagem 4" />
        {/* --------------------------------- */}
        <img src={BegePrimeLiso} alt="Imagem 1" />
        <img src={BegePrimeParadise} alt="Imagem 2" />
        <img src={BrancoFortaleza} alt="Imagem 3" />
        <img src={BrancoPrime} alt="Imagem 4" />
        {/* --------------------------------- */}
        {/* Adicione mais imagens conforme necessário */}
        <img src={MarromTabaco} alt="Imagem 1" />
        <img src={PretoSantaAngélica} alt="Imagem 3" />
        <img src={OrnamentalValcélio} alt="Imagem 2" />
        <img src={PretoViaLactea} alt="Imagem 4" />
        {/* ------------------------------------- */}
        <img src={SuperPrime} alt="Imagem 1" />
        <img src={Supernano} alt="Imagem 2" />
        <img src={VerdeUbatuba} alt="Imagem 3" />
        <img src={amarelocapri} alt="Imagem 4" />
        {/* ------------------------------------- */}
        <img src={amareloicarai} alt="Imagem 1" />
        <img src={amarelomaracuja} alt="Imagem 2" />
        <img src={amarelosantacecilia} alt="Imagem 3" />
        <img src={begebahia} alt="Imagem 4" />
      </div>
      <Button buttonText="See Our Catalog" />
    </div>
  );
};

export default PresentationMaterials;
