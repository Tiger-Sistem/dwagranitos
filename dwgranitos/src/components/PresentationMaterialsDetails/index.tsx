import React from "react";
import "./styles.css";

import Button from "../Button";
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
import CafeEmperador from "../../assets/images/material/LinhaMarble/CafeEmperador.png";
import CalacataAltissimo from "../../assets/images/material/LinhaMarble/CalacataAltissimo.png";
import CalacataBello from "../../assets/images/material/LinhaMarble/CalacataBello.png";
import CalacataBianco from "../../assets/images/material/LinhaMarble/CalacataBianco.png";
import CalacataClassic from "../../assets/images/material/LinhaMarble/CalacataClassic.png";
import CalacataGioia from "../../assets/images/material/LinhaMarble/CalacataGioia.png";
import CalacataOro from "../../assets/images/material/LinhaMarble/CalacataOro.png";
import CarraraNevato from "../../assets/images/material/LinhaMarble/CarraraNevato.png";
import CarraraVenatino from "../../assets/images/material/LinhaMarble/CarraraVenatino.png";
import CloudyBeige from "../../assets/images/material/LinhaMarble/CloudyBeige.png";
import GreyAmani from "../../assets/images/material/LinhaMarble/GreyAmani.png";
import NeroMarquina from "../../assets/images/material/LinhaMarble/NeroMarquina.png";
import Portobella from "../../assets/images/material/LinhaMarble/Portobella.png";
import BlueDeepQuartzito from "../../assets/images/material/Exotico/BlueDeep-Quartzito.png";
import CopacabanaGranito from "../../assets/images/material/Exotico/Copacabana-Granito.png";
import CrystalloJuliet from "../../assets/images/material/Exotico/CrystalloJuliet.png";
import ExplosionBlue from "../../assets/images/material/Exotico/ExplosionBlue.png";
import ParamountQuartzito from "../../assets/images/material/Exotico/Paramount-Quartzito.png";
import JadeRoyal from "../../assets/images/material/Exotico/JadeRoyal.png";
import TeslaQuartzito from "../../assets/images/material/Exotico/Tesla-Quartzito.png";

const PresentationMaterialsDetails = () => {
  return (
    <div className="presentation-materials">
      <h2 className="titulo">Nossos Materiais</h2>

      <p className="paragrafoMaterials">
        A DW Granitos atua em perfeita sintonia com seus clientes, fornecendo
        uma linha completa de materiais que atende às suas necessidades. Estamos
        comprometidos em oferecer o material ideal para a sua obra. Caso não
        encontre o que procura, entre em contato conosco e faremos o possível
        para atender às suas demandas.
      </p>
      <div className="imagensMaterialsDetails imgMaterial">
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Florença</span> <br />
            <img className="imgCap" src={AmareloFlorença} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Amarelo Vitória</span>
            <br />
            <img src={AmareloVitoria} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Arabescato</span>
            <br />
            <img src={Arabescato} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Arabesco</span>
            <br />
            <img src={Arabesco} alt="Imagem 4" />
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Bege Prime Liso</span>
            <br />
            <img src={BegePrimeLiso} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Bege Prime Paradise</span>
            <br />
            <img src={BegePrimeParadise} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Branco Fortaleza</span>
            <br />
            <img src={BrancoFortaleza} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Branco Prime</span>
            <br />
            <img src={BrancoPrime} alt="Imagem 4" />
          </div>
        </div>
        {/* --------------------------------- */}
        {/* Adicione mais imagens conforme necessário */}
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Marrom Tabaco</span>
            <br />
            <img src={MarromTabaco} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Preto Santa Angélica</span>
            <br />
            <img src={PretoSantaAngélica} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Ornamental Valcélio</span>
            <br />
            <img src={OrnamentalValcélio} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Preto Via Lactea</span>
            <br />
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
      <div>
        <h2 className="titulo">Linha Marble </h2>
      </div>
      <div className="imagensMaterialsDetails imgMaterial">
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Café Emperador</span> <br />
            <img className="imgCap" src={CafeEmperador} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Calacata Altíssimo</span>
            <br />
            <img src={CalacataAltissimo} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Calacata Bello</span>
            <br />
            <img src={CalacataBello} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Calacata Bianco</span>
            <br />
            <img src={CalacataBianco} alt="Imagem 4" />
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Calacata Classic</span>
            <br />
            <img src={CalacataClassic} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Calacata Oro</span>
            <br />
            <img src={CalacataOro} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Calacata Gioia</span>
            <br />
            <img src={CalacataGioia} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Carrara Nevato</span>
            <br />
            <img src={CarraraNevato} alt="Imagem 4" />
          </div>
        </div>
        {/* --------------------------------- */}
        {/* Adicione mais imagens conforme necessário */}
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Carrara Venatino</span>
            <br />
            <img src={CarraraVenatino} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Cloudy Beige</span>
            <br />
            <img src={CloudyBeige} alt="Imagem 3" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Grey Amani</span>
            <br />
            <img src={GreyAmani} alt="Imagem 2" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Nero Marquina</span>
            <br />
            <img src={NeroMarquina} alt="Imagem 4" />
          </div>
        </div>
        {/* ------------------------------------- */}

        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Portobella</span> <br />
            <img src={Portobella} alt="Imagem 1" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="titulo">Linha Exótica </h2>
      </div>
      <div className="imagensMaterialsDetails imgMaterial">
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Blue Deep Quartzito</span> <br />
            <img src={BlueDeepQuartzito} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Crystallo Juliet</span> <br />
            <img src={CrystalloJuliet} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Copacabana Granito</span> <br />
            <img src={CopacabanaGranito} alt="Imagem 1" />
          </div>
        </div>

        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Paramount Quartzito</span> <br />
            <img src={ParamountQuartzito} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>JadeRoyal</span> <br />
            <img src={JadeRoyal} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container1">
          <div className="image-wrapper1">
            <span>Explosion Blue</span> <br />
            <img src={ExplosionBlue} alt="Imagem 1" />
          </div>
        </div>
        <div className="imagem-container">
          <div className="image-wrapper">
            <span>Tesla Quartzito</span> <br />
            <img src={TeslaQuartzito} alt="Imagem 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationMaterialsDetails;
