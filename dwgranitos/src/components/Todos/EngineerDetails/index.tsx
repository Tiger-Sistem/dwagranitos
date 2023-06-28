import React from "react";
import "./styles.css";

import Engenharia from "../../../assets/images/engenharia/engenharia.jpg";
import Engenharia1 from "../../../assets/images/engenharia/engenharia1.jpg";
import Engenharia2 from "../../../assets/images/engenharia/engenharia2.jpg";
import Engenharia3 from "../../../assets/images/engenharia/engenharia3.jpg";
import Engenharia4 from "../../../assets/images/engenharia/engenharia4.jpg";
import Engenharia5 from "../../../assets/images/engenharia/engenharia5.jpg";
import Gourmet1 from "../../../assets/images/engenharia/gourmet-cozinha1.jpg";
import Gourmet2 from "../../../assets/images/engenharia/gourmet-cozinha2.jpg";
// -------------------------------------------------
import Pia1 from "../../../assets/images/engenharia/pia1.png";
import Pia2 from "../../../assets/images/engenharia/pia2.png";
import Pia3 from "../../../assets/images/engenharia/pia3.png";
import Pia4 from "../../../assets/images/engenharia/pia4.png";
// -------------------------------------------------
import Pia5 from "../../../assets/images/engenharia/pia5.png";
import Pia6 from "../../../assets/images/engenharia/pia6.png";
import VerdeUbatuba from "../../../assets/images/material/Verde-Ubatuba-1024x683.jpg";
import amarelocapri from "../../../assets/images/material/amarelo-capri-1.png";
// -------------------------------------------------
import amareloicarai from "../../../assets/images/material/amarelo-icarai.jpg";
import amarelomaracuja from "../../../assets/images/material/amarelo-maracuja.jpg";
import amarelosantacecilia from "../../../assets/images/material/amarelo-santa-cecilia.jpg";
import begebahia from "../../../assets/images/material/bege-bahia.jpg";

const EngineerDetails = () => {
  return (
    <div className="presentation-materials">
      <hr className="linha" />

      <div className="imagens imgMaterial">
        <img src={Engenharia} alt="Imagem 1" />
        <img src={Engenharia1} alt="Imagem 2" />
        <img src={Engenharia2} alt="Imagem 3" />
        <img src={Engenharia3} alt="Imagem 4" />
        {/* --------------------------------- */}
        <img src={Engenharia4} alt="Imagem 1" />
        <img src={Engenharia5} alt="Imagem 2" />
        <img src={Gourmet1} alt="Imagem 3" />
        <img src={Gourmet2} alt="Imagem 4" />
        {/* --------------------------------- */}
        {/* Adicione mais imagens conforme necessário */}
        <img src={Pia1} alt="Imagem 1" />
        <img src={Pia3} alt="Imagem 3" />
        <img src={Pia2} alt="Imagem 2" />
        <img src={Pia4} alt="Imagem 4" />
        {/* ------------------------------------- */}
        <img src={Pia5} alt="Imagem 1" />
        <img src={Pia6} alt="Imagem 2" />
        <img src={VerdeUbatuba} alt="Imagem 3" />
        <img src={amarelocapri} alt="Imagem 4" />
        {/* ------------------------------------- */}
        <img src={amareloicarai} alt="Imagem 1" />
        <img src={amarelomaracuja} alt="Imagem 2" />
        <img src={amarelosantacecilia} alt="Imagem 3" />
        <img src={begebahia} alt="Imagem 4" />
      </div>
    </div>
  );
};

export default EngineerDetails;
