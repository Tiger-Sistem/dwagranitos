import React from "react";
import "./styles.css";

import Button from "../Button";
import Slide from "./Slide";

const PresentationEngineering = () => {
  return (
    <div className="presentation-engineering">
      <h2 className="titulo">Engenharia</h2>

      <p className="paragrafo">Texto do parágrafo centralizado</p>
      <div className="PresentationEngineeringSlide">
        <Slide />
      </div>

      <Button buttonText="Mais Obras" />
    </div>
  );
};

export default PresentationEngineering;
