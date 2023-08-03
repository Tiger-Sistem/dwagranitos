import "../styles.css";

import Escada1 from "../../../assets/images/escadas/escada1.png";
import Escada2 from "../../../assets/images/escadas/escada2.png";
import Escada3 from "../../../assets/images/escadas/escada3.png";
import Escada4 from "../../../assets/images/escadas/escada4.png";
import Escada5 from "../../../assets/images/escadas/escada5.png";
import Escada6 from "../../../assets/images/escadas/escada6.png";

export default function EscadasComponent() {
  return (
    <div className="presentation-materials">
      <hr className="linha" />

      <div className="imagensEng imgMaterialEng">
        <img src={Escada1} alt="Imagem 2" />
        <img src={Escada2} alt="Imagem 3" />
        <img src={Escada3} alt="Imagem 4" />
        {/* --------------------------------- */}
        <img src={Escada4} alt="Imagem 1" />
        <img src={Escada5} alt="Imagem 2" />
        <img src={Escada6} alt="Imagem 3" />
      </div>
    </div>
  );
}
