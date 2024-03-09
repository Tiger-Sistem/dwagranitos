import "../styles.css";

import Piso1 from "../../../../assets/images/piso/piso-bege-bahia.jpg";
import Piso2 from "../../../../assets/images/piso/piso-elevado-em-sao-paulo.jpg";
import Piso3 from "../../../../assets/images/piso/piso-granito-preco-m2_10972_152830_1556139099072_cover.png";
import Piso4 from "../../../../assets/images/piso/piso4.png";
import Piso5 from "../../../../assets/images/piso/piso5.png";
import Piso6 from "../../../../assets/images/piso/piso6.png";
import Piso7 from "../../../../assets/images/piso/piso7.png";
import Piso8 from "../../../../assets/images/piso/piso8.png";
import Piso9 from "../../../../assets/images/piso/piso9.png";
import Piso10 from "../../../../assets/images/engenharia/engenharia1.jpg";

export default function PisoComponent() {
  return (
    <div className="presentation-materials">
      <hr className="linha" />

      <div className="imagensEng imgMaterialEng">
        <img src={Piso1} alt="Imagem 3" />
        <img src={Piso10} alt="Imagem 4" />
        <img src={Piso2} alt="Imagem 1" />
        <img src={Piso3} alt="Imagem 2" />
        <img src={Piso4} alt="Imagem 3" />
        <img src={Piso5} alt="Imagem 4" />
        <img src={Piso6} alt="Imagem 5" />
        <img src={Piso7} alt="Imagem 6" />
        <img src={Piso8} alt="Imagem 7" />
        <img src={Piso9} alt="Imagem 8" />
      </div>
    </div>
  );
}
