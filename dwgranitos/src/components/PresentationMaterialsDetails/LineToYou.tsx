import React from "react";

import CalacataBello from "../../assets/images/LinhaCriadaPensandoEmVoce/1-calacata-bello.png";
import CarraraVenatino from "../../assets/images/LinhaCriadaPensandoEmVoce/2-carrara-venatino.png";
import CalacataGioia from "../../assets/images/LinhaCriadaPensandoEmVoce/3-calacata-gioia.png";
import CloudyBeige from "../../assets/images/LinhaCriadaPensandoEmVoce/4-cloudy-beige.png";
import CalacataAltissimo from "../../assets/images/LinhaCriadaPensandoEmVoce/5-calacata-altissimo.png";
import Portobella from "../../assets/images/LinhaCriadaPensandoEmVoce/6-portobella.png";
import CalacataBianco from "../../assets/images/LinhaCriadaPensandoEmVoce/7-calacata-bianco.png";
import CafeEmperador from "../../assets/images/LinhaCriadaPensandoEmVoce/8-cafe-emperador.png";
import GreyAmani from "../../assets/images/LinhaCriadaPensandoEmVoce/9-grey-amani.png";
import CarraraNevato from "../../assets/images/LinhaCriadaPensandoEmVoce/10-carrara-nevato.png";
import NeroMarquina from "../../assets/images/LinhaCriadaPensandoEmVoce/11-nero-marquina.png";
import CalacataOro from "../../assets/images/LinhaCriadaPensandoEmVoce/12-calacata-oro.png";
import CalacataClassic from "../../assets/images/LinhaCriadaPensandoEmVoce/13-calacata-classic.png";



export const LineToYou = (): React.ReactElement => {
    return (
        <>
            <div>
                <h2 className="titulo">Linha Criados para você:</h2>
            </div>
            <div className="imagensMaterialsDetails imgMaterial">
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Calacata Bello</span> <br />
                        <img className="imgCap" src={CalacataBello} alt="Imagem 1" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Carrara Venatino</span><br />
                        <img src={CarraraVenatino} alt="Imagem 2" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Calacata Gioia</span><br />
                        <img src={CalacataGioia} alt="Imagem 3" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Cloudy Beige</span><br />
                        <img src={CloudyBeige} alt="Imagem 4" />
                    </div>
                </div>
                {/* --------------------------------- */}
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Calacata Oro</span><br />
                        <img src={CalacataOro} alt="Imagem 1" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Café Emperador</span><br />
                        <img src={CafeEmperador} alt="Imagem 2" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Portobella</span><br />
                        <img src={Portobella} alt="Imagem 3" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Calacata Bianco</span><br />
                        <img src={CalacataBianco} alt="Imagem 4" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>CalacataAltissimo</span><br />
                        <img src={CalacataAltissimo} alt="Imagem 1" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Calacata Classic</span><br />
                        <img src={CalacataClassic} alt="Imagem 3" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Grey Amani</span><br />
                        <img src={GreyAmani} alt="Imagem 2" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Carrara Nevato</span><br />
                        <img src={CarraraNevato} alt="Imagem 4" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Nero Marquina</span> <br />
                        <img src={NeroMarquina} alt="Imagem 1" />
                    </div>
                </div>
            </div>
        </>
    );
}