import PresentationMaterialsDetails from "../../components/PresentationMaterialsDetails";
import Title from "../../components/Title";
import "./styles-catalog.css"

const Catalog = () => {
  return (
    <div className="catalog">
      <Title title="Catálogo" />
      <PresentationMaterialsDetails />
    </div>
  );
};

export default Catalog;
