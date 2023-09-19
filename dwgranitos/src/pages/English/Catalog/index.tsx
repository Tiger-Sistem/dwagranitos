import { useEffect, useState } from "react";
import PresentationMaterialsDetails from "../../../components/English/PresentationMaterialsDetails";
import Title from "../../../components/English/Title";

const CatalogEnglish = () => {
  const [titulo, setTitulo] = useState("Catálogo");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
  return (
    <div>
      <Title title="Catálogo" />
      <PresentationMaterialsDetails />
    </div>
  );
};

export default CatalogEnglish;
