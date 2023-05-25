import React from "react";
import "./style.css";
import Menu from "./Menu";
import logo from "../../assets/images/logo.png"; // Importe seu logotipo ou substitua pelo caminho correto
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import brazilFlag from "../../assets/images/brazil-flag.jpg"; // Importe a imagem da bandeira do Brasil
import usaFlag from "../../assets/images/usa-flag.jpg"; // Importe a imagem da bandeira do Brasil
import MenuHamburger from "./MenuHamburger";

function Header() {
  return (
    <header className="header">
      <div className="faixa">
        <div className="header-icons">
          <div className="right-icons">
            <div className="left-icons">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <aside className="phoneAside"> (28) 3524 2288</aside>

            <aside> WHATSAPP: (28) 99956-3579 |</aside>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <img
              src={brazilFlag}
              alt="Bandeira do Brasil"
              className="flag-icon"
            />
            <img src={usaFlag} alt="Bandeira dos EUA" className="flag-icon" />
          </div>
        </div>
      </div>

      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <Menu />
        <div className="hamburger">
          <MenuHamburger />
        </div>
      </div>
    </header>
  );
}

export default Header;
