import React from "react";

import TajMahal from "../../assets/images/Laminatos/1-taj-mahal.png";
import ConcretoUrbano from "../../assets/images/Laminatos/2-concreto-urbano.png";
import TravertinoSilver from "../../assets/images/Laminatos/3-travertino-silver.png";
import EmeraldWave from "../../assets/images/Laminatos/4-emerald-wave.png";
import GrigioArtemis from "../../assets/images/Laminatos/5-grigio-artemis.png";


export const LineToYou = (): React.ReactElement => {
    return (
        <>
            <div>
                <h2 className="titulo">Linha Criados para você:</h2>
            </div>
            <div className="imagensMaterialsDetails imgMaterial">
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Taj Mahal</span> <br />
                        <img className="imgCap" src={TajMahal} alt="Imagem 1" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Concreto Urbano</span><br />
                        <img src={ConcretoUrbano} alt="Imagem 2" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Travertino Silver</span><br />
                        <img src={TravertinoSilver} alt="Imagem 3" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Emerald Wave</span><br />
                        <img src={EmeraldWave} alt="Imagem 4" />
                    </div>
                </div>
                {/* --------------------------------- */}
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Grigio Artemis</span><br />
                        <img src={GrigioArtemis} alt="Imagem 1" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Calacata Classic</span><br />
                        <img src={CalacataClassic} alt="Imagem 2" />
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
                {/* --------------------------------- */}
                {/* Adicione mais imagens conforme necessário */}
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Calacata Oro</span><br />
                        <img src={CalacataOro} alt="Imagem 1" />
                    </div>
                </div>
                <div className="imagem-container">
                    <div className="image-wrapper">
                        <span>Café Emperador</span><br />
                        <img src={CafeEmperador} alt="Imagem 3" />
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
                {/* ------------------------------------- */}

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