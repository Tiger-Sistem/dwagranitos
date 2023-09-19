import React, { useEffect, useState } from "react";
import Slider from "../../../components/English/Slider";
import CorpoHome from "../../../components/English/Corpo";
import PresentationMaterials from "../../../components/English/PresentationMaterials";
import PresentationPisos from "../../../components/English/PresentationPisos";
import PresentationEngineering from "../../../components/English/PresentationEngineering";
// import News from "../../components/News";
// import Footer from "../../components/Footer";

const HomeEnglish = () => {
  const [titulo, setTitulo] = useState("DW Granitos");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
  return (
    <div>
      <Slider />
      <CorpoHome />
      <PresentationMaterials />
      <PresentationPisos />
      <PresentationEngineering />
    </div>
  );
};

export default HomeEnglish;
