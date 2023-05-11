import "./styles.css";

import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";
import Banner3 from "../../assets/images/banner3.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 heigthImg"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="frase">
              <h2>
                Fornecemos as melhores soluções com elevados padrões de
                qualidade
              </h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 heigthImg"
            src={Banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2>Soluções de qualidade e mão de obra especializada.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 heigthImg"
            src={Banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>
              Entender as necessidades atuais e futuras de todas as partes
              interessadas
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
