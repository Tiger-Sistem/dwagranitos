import { useEffect, useState } from "react";
import PresentationMaterialsDetails from "../../components/PresentationMaterialsDetails";
import Title from "../../components/Title";

const Catalog = () => {
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

export default Catalog;
