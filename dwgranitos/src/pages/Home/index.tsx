import React from "react";
import Slider from "../../components/Slider";
import CorpoHome from "../../components/Corpo";
import PresentationMaterials from "../../components/PresentationMaterials";
import PresentationPisos from "../../components/PresentationPisos";
import PresentationEngineering from "../../components/PresentationEngineering";

function Home() {
  return (
    <div>
      <Slider />
      <CorpoHome />
      <PresentationMaterials />
      <PresentationPisos />
      <PresentationEngineering />
    </div>
  );
}

export default Home;
