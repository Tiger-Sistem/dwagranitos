import React from "react";
import "./styles.css";
import NameCompany from "./nameEmpresa";
import { Image } from "react-bootstrap";
import LogoRodape from "../../../assets/images/logo-rodape.png";
import { Link } from "react-router-dom";

const FooterEnglish = () => {
  return (
    <div className="divFooter navbar-fixed-bottom">
      <hr style={{ color: "#0c0c0c" }} />
      <footer className="footer">
        <div className="logoRodape">
          <Image className="logoFooter" src={LogoRodape} />
        </div>
        <div className="coluna-contato">
          <h3>Contact</h3>
          <p>Phone: (28) 99951-1643</p>
          <p>Cell: (28) 99951-1643</p>
          <p>Email: comercial@dwgranitos.com.br</p>
        </div>
        <div className="coluna-endereco">
          {" "}
          <h3>Address</h3>
          <p>
            Street Antônio Bazoni s/nº – Vargem Grande de Soturno, Cachoeiro de
            Itapemirim - ES - ZIP: 29321-000
          </p>
        </div>
        <div>
          <div className="coluna-links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link
                  style={{
                    color: "#0c0c0c",
                    textDecoration: "none",
                  }}
                  to="/en/about"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  style={{
                    color: "#0c0c0c",
                    textDecoration: "none",
                  }}
                  to="/en/blog"
                >
                  Latest News
                </Link>
              </li> */}
              <li>
                <Link
                  style={{
                    color: "#0c0c0c",
                    textDecoration: "none",
                  }}
                  to="/en/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <NameCompany />
    </div>
  );
};

export default FooterEnglish;
