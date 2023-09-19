import "../styles.css";

import Engenharia from "../../../../assets/images/engenharia/engenharia.jpg";
import Engenharia3 from "../../../../assets/images/engenharia/engenharia3.jpg";
import Engenharia4 from "../../../../assets/images/engenharia/engenharia4.jpg";
import Engenharia5 from "../../../../assets/images/engenharia/engenharia5.jpg";
import Gourmet1 from "../../../../assets/images/engenharia/gourmet-cozinha1.jpg";
import Gourmet2 from "../../../../assets/images/engenharia/gourmet-cozinha2.jpg";
import Gourmet3 from "../../../../assets/images/engenharia/gourmet-cozinha3.png";
import Gourmet4 from "../../../../assets/images/engenharia/gourmet-cozinha4.png";
import Gourmet5 from "../../../../assets/images/engenharia/gourmet-cozinha5.png";
import Gourmet6 from "../../../../assets/images/engenharia/gourmet-cozinha6.png";
import Gourmet7 from "../../../../assets/images/engenharia/gourmet-cozinha7.png";
import Gourmet8 from "../../../../assets/images/engenharia/gourmet8.jpg";
import Gourmet9 from "../../../../assets/images/engenharia/gourmet9.jpg";
import Gourmet10 from "../../../../assets/images/engenharia/gourmet10.jpg";

export function ComercialComponent() {
  return (
    <div className="presentation-materials">
      <hr className="linha" />
      <div className="imagensEng imgMaterialEng">
        <img src={Engenharia} alt="Imagem 1" />
        <img src={Engenharia3} alt="Imagem 4" />
        <img src={Engenharia4} alt="Imagem 1" />
        <img src={Engenharia5} alt="Imagem 2" />
        <img src={Gourmet1} alt="Imagem 3" />
        <img src={Gourmet2} alt="Imagem 4" />
        <img src={Gourmet3} alt="Imagem 4" />
        <img src={Gourmet4} alt="Imagem 3" />
        <img src={Gourmet5} alt="Imagem 4" />
        <img src={Gourmet5} alt="Imagem 3" />
        <img src={Gourmet6} alt="Imagem 4" />
        <img src={Gourmet7} alt="Imagem 4" />
        <img src={Gourmet8} alt="Imagem 5" />
        <img src={Gourmet9} alt="Imagem 6" />
        <img src={Gourmet10} alt="Imagem 7" />
      </div>
    </div>
  );
}
