import React from "react";
import "./styles.css";

import Button from "../Button";
import Slide from "./Slide";

const PresentationEngineering = () => {
  return (
    <div className="presentation-engineering">
      <h2 className="titulo">Engenharia</h2>

      <p className="paragrafoEngineer">
        A DW Granitos tem o orgulho de ter fornecido granitos e mármores de
        qualidade para obras de destaque no Brasil e no mundo. Apresentamos aqui
        uma pequena amostra de alguns dos trabalhos realizados pela nossa
        empresa. Esses projetos são exemplos do nosso compromisso com a
        excelência e da nossa capacidade de fornecer materiais de alta qualidade
        para empreendimentos de grande importância.
      </p>
      <div className="PresentationEngineeringSlide">
        <Slide />
      </div>

      <Button buttonText="Mais Obras" />
    </div>
  );
};

export default PresentationEngineering;
