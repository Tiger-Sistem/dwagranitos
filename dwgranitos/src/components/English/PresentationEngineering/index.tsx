import React from "react";
import "./styles.css";

import Button from "../Button";
import Slide from "./Slide";

const PresentationEngineering = () => {
  return (
    <div className="presentation-engineering">
      <h2 className="titulo">Engineering</h2>

      <p className="paragrafoEngineer">
        DW Granitos takes pride in having supplied quality granites and marbles
        for prominent projects in Brazil and around the world. Here, we present
        a small sample of some of the work carried out by our company. These
        projects are examples of our commitment to excellence and our ability to
        provide high-quality materials for significant ventures.
      </p>
      <div className="PresentationEngineeringSlide">
        <Slide />
      </div>

      <Button to={"/en/engineering"} buttonText="More Projects" />
    </div>
  );
};

export default PresentationEngineering;
