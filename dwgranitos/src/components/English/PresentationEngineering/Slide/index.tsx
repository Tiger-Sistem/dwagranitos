import Slider from "react-slick";
import Engenharia from "../../../../assets/images/engenharia/engenharia.jpg";
import Engenharia2 from "../../../../assets/images/engenharia/engenharia1.jpg";
import Engenharia3 from "../../../../assets/images/engenharia/engenharia2.jpg";
import Engenharia4 from "../../../../assets/images/engenharia/engenharia3.jpg";
import Engenharia5 from "../../../../assets/images/engenharia/engenharia5.jpg";
import "../styles.css";

import "../styles.css";
import "../styles.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
  };

  return (
    <div className="subSlider">
      <Slider {...settings}>
        <div className="imgEngenharia">
          <img src={Engenharia} alt="Imagem 1" />
        </div>
        <div className="imgEngenharia">
          <img src={Engenharia2} alt="Imagem 2" />
        </div>
        <div className="imgEngenharia">
          <img src={Engenharia3} alt="Imagem 3" />
        </div>
        <div className="imgEngenharia">
          <img src={Engenharia4} alt="Imagem 4" />
        </div>
        <div className="imgEngenharia">
          <img src={Engenharia5} alt="Imagem 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
