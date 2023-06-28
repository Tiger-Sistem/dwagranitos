import "./styles.css";

import Piscina1 from "../../../assets/images/piscinas/Piscinas1.png";
import Piscina2 from "../../../assets/images/piscinas/Piscinas2.png";
import Piscina3 from "../../../assets/images/piscinas/Piscinas3.png";
import Piscina4 from "../../../assets/images/piscinas/Piscinas4.png";
import Piscina5 from "../../../assets/images/piscinas/Piscinas5.png";
import Piscina6 from "../../../assets/images/piscinas/Piscinas6.png";

export default function PiscinasComponent() {
  return (
    <div className="presentation-materials">
      <hr className="linha" />

      <div className="imagens imgMaterial">
        <img src={Piscina1} alt="Imagem 2" />
        <img src={Piscina2} alt="Imagem 3" />
        <img src={Piscina3} alt="Imagem 4" />
        {/* --------------------------------- */}
        <img src={Piscina4} alt="Imagem 1" />
        <img src={Piscina5} alt="Imagem 2" />
        <img src={Piscina6} alt="Imagem 3" />
      </div>
    </div>
  );
}
