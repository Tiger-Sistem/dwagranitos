import React, { useEffect, useState } from "react";
import "./style.css";
import Menu from "./Menu";
import logo from "../../assets/images/logo.png"; // Importe seu logotipo ou substitua pelo caminho correto
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import brazilFlag from "../../assets/images/brazil-flag.jpg"; // Importe a imagem da bandeira do Brasil
import usaFlag from "../../assets/images/usa-flag.jpg"; // Importe a imagem da bandeira do Brasil
import MenuHamburger from "./MenuHamburger";
import { Link } from "react-router-dom";
import MenuEnglish from "../English/Header/Menu";
import MenuHamburgerEnglish from "../English/Header/MenuHamburger";
import { useLanguageContext } from "../../LanguageContext";
import AppRoutes from "../../AppRoute";
import Footer from "../Footer";
import FooterEnglish from "../English/Footer";

function Header() {
  const [language, setIdioma] = useState(false);
  const { idioma, setLanguage } = useLanguageContext();

  const handleBrazil = () => {
    setIdioma(false);
    setLanguage(false);
  };

  const handleUSA = () => {
    setIdioma(true);
    setLanguage(true);
  };

  useEffect(() => {}, [idioma]);

  return (
    <>
      <header className="header">
        <div className="faixa">
          <div className="header-icons">
            <div className="right-icons">
              <div className="left-icons">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <aside className="phoneAside"> (28) 99951-1643</aside>

              <aside> WHATSAPP: +55 28 99951-1643 |</aside>
              <FontAwesomeIcon icon={faInstagram} className="icone-destaque" />
              <FontAwesomeIcon icon={faFacebook} className="icone-destaque" />
              <Link to="/">
                <img
                  onClick={handleBrazil}
                  src={brazilFlag}
                  alt="Bandeira do Brasil"
                  className="flag-icon icone-destaque"
                />
              </Link>

              <Link to="/en">
                <img
                  onClick={handleUSA}
                  src={usaFlag}
                  alt="Bandeira dos EUA"
                  className="flag-icon icone-destaque"
                />
              </Link>
            </div>
          </div>
        </div>

        {language === false ? (
          <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <Menu />
            <div className="hamburger">
              <MenuHamburger />
            </div>
          </div>
        ) : (
          <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <MenuEnglish />
            <div className="hamburger">
              <MenuHamburgerEnglish />
            </div>
          </div>
        )}
      </header>
      <AppRoutes />
      {language === false ? <Footer /> : <FooterEnglish />}
    </>
  );
}

export default Header;
