import React from "react";
import "./styles.css";

import AmareloFlorença from "../../assets/images/material/Amarelo-Florença-1024x683.jpg";
import AmareloVitoria from "../../assets/images/material/Amarelo-Vitória-1024x683.jpg";
import Arabescato from "../../assets/images/material/Arabescato-1024x683.jpg";
import Arabesco from "../../assets/images/material/Arabesco-1024x683.jpg";
import BegePrimeLiso from "../../assets/images/material/Bege-Prime-Liso-1024x683.jpg";
import BegePrimeParadise from "../../assets/images/material/Bege-Prime-Paradise-1024x683.jpg";
import BrancoFortaleza from "../../assets/images/material/Branco-Fortaleza-1024x683.jpg";
import BrancoPrime from "../../assets/images/material/Branco-Prime-1024x683.jpg";
// -------------------------------------------------
import MarromTabaco from "../../assets/images/material/Marrom-Tabaco-1024x683.jpg";
import OrnamentalValcélio from "../../assets/images/material/Ornamental-Valcélio-1024x683.jpg";
import PretoSantaAngélica from "../../assets/images/material/Preto-Santa-Angélica-1024x683.jpg";
import PretoViaLactea from "../../assets/images/material/Preto-Via-Lactea-1024x683.jpg";
// -------------------------------------------------
import SuperPrime from "../../assets/images/material/Super-Prime-1024x683.jpg";
import Supernano from "../../assets/images/material/Supernano-1024x683.jpg";
import VerdeUbatuba from "../../assets/images/material/Verde-Ubatuba-1024x683.jpg";
import amarelocapri from "../../assets/images/material/amarelo-capri-1.png";
// -------------------------------------------------
import amareloicarai from "../../assets/images/material/amarelo-icarai.jpg";
import amarelomaracuja from "../../assets/images/material/amarelo-maracuja.jpg";
import amarelosantacecilia from "../../assets/images/material/amarelo-santa-cecilia.jpg";
import begebahia from "../../assets/images/material/bege-bahia.jpg";
import { LineToYou } from "./LineToYou";
import { Laminattos } from "./Laminattos";
import { Exotics } from "./Exotics";



const PresentationMaterialsDetails = (): React.ReactElement => {
  return (
    <div className="presentation-materials">
      <hr className="linha" />
      <h2 className="titulo">Nossos Materiais</h2>
      <p className="paragrafoMaterials">
        A DW Granitos atua em perfeita sintonia com seus clientes, fornecendo
        uma linha completa de materiais que atende às suas necessidades. Estamos
        comprometidos em oferecer o material ideal para a sua obra. Caso não
        encontre o que procura, entre em contato conosco e faremos o possível
        para atender às suas demandas.
      </p>
      <div>
        <h2 className="titulo">Linha Elementares</h2>
      </div>

      <div className="imagensMaterialsDetails imgMaterial">
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Florença</span> <br />
            <img className="imgCap" src={AmareloFlorença} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Vitória</span><br />
            <img src={AmareloVitoria} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Arabescato</span><br />
            <img src={Arabescato} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Arabesco</span><br />
            <img src={Arabesco} alt="Imagem 4" />
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Bege Prime Liso</span><br />
            <img src={BegePrimeLiso} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Bege Prime Paradise</span><br />
            <img src={BegePrimeParadise} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Branco Fortaleza</span><br />
            <img src={BrancoFortaleza} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Branco Prime</span><br />
            <img src={BrancoPrime} alt="Imagem 4" />
          </div>
        </div>
        {/* --------------------------------- */}
        {/* Adicione mais imagens conforme necessário */}
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Marrom Tabaco</span><br />
            <img src={MarromTabaco} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Preto Santa Angélica</span><br />
            <img src={PretoSantaAngélica} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Ornamental Valcélio</span><br />
            <img src={OrnamentalValcélio} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Preto Via Lactea</span><br />
            <img src={PretoViaLactea} alt="Imagem 4" />
          </div>
        </div>
        {/* ------------------------------------- */}

        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Super Prime</span> <br />
            <img src={SuperPrime} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Super Nano</span> <br />
            <img src={Supernano} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Verde Ubatuba</span> <br />
            <img src={VerdeUbatuba} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Capri</span> <br />
            <img src={amarelocapri} alt="Imagem 4" />
            {/* ------------------------------------- */}
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Ícaraí</span> <br />
            <img src={amareloicarai} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Maracujá</span> <br />
            <img src={amarelomaracuja} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Santa Cecilia</span> <br />
            <img src={amarelosantacecilia} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">

          <div className="image-wrapper">
            <span>Bege Bahia</span> <br />
            <img src={begebahia} alt="Imagem 4" data-name="BegeBahia" />
          </div>
        </div>
      </div>


      <LineToYou />
      <Laminattos/>
      <Exotics />
    </div>
  );
};

export default PresentationMaterialsDetails;
