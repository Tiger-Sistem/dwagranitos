import "../styles.css";

import Piscina1 from "../../../../assets/images/piscinas/Piscinas1.png";
import Piscina2 from "../../../../assets/images/piscinas/Piscinas2.png";
import Piscina3 from "../../../../assets/images/piscinas/Piscinas3.png";
import Piscina4 from "../../../../assets/images/piscinas/Piscinas4.png";
import Piscina5 from "../../../../assets/images/piscinas/Piscinas5.png";
import Piscina6 from "../../../../assets/images/piscinas/Piscinas6.png";
import Piscina7 from "../../../../assets/images/piscinas/piscina7.jpg";
import Piscina8 from "../../../../assets/images/piscinas/piscina8.jpg";
import Piscina9 from "../../../../assets/images/piscinas/piscina9.jpg";
import Piscina10 from "../../../../assets/images/piscinas/piscina10.jpg";

export default function PiscinasComponent() {
  return (
    <div className="presentation-materials">
      <hr className="linha" />

      <div className="imagensEng imgMaterialEng">
        <img src={Piscina1} alt="Imagem 2" />
        <img src={Piscina2} alt="Imagem 3" />
        <img src={Piscina3} alt="Imagem 4" />
        <img src={Piscina4} alt="Imagem 5" />
        <img src={Piscina5} alt="Imagem 6" />
        <img src={Piscina6} alt="Imagem 7" />
        <img src={Piscina7} alt="Imagem 8" />
        <img src={Piscina8} alt="Imagem 9" />
        <img src={Piscina9} alt="Imagem 10" />
        <img src={Piscina10} alt="Imagem 11" />
      </div>
    </div>
  );
}
