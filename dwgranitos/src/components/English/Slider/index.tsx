import "./styles.css";

import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../../assets/images/slide/imagem1.jpg";
import Banner2 from "../../../assets/images/slide/imagem2.jpg";
import Banner3 from "../../../assets/images/slide/imagem3.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 heightImg"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="phrase">
              <h2>We provide the best solutions with high-quality standards</h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 heightImg"
            src={Banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Quality solutions and skilled craftsmanship.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 heightImg"
            src={Banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>
              Understanding the current and future needs of all stakeholders
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
