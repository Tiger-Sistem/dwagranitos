import React from "react";
import Slider from "react-slick";
import imagem from "../../../assets/images/banner1.jpg";
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
        <div>
          <img src={imagem} alt="Imagem 1" />
        </div>
        <div>
          <img src={imagem} alt="Imagem 2" />
        </div>
        <div>
          <img src={imagem} alt="Imagem 3" />
        </div>
        <div>
          <img src={imagem} alt="Imagem 4" />
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
