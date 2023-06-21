import React from "react";
import "./styles.css";
import NameCompany from "./nameEmpresa";
import { Image } from "react-bootstrap";
import LogoRodape from "../../assets/images/logo-rodape.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="divFooter navbar-fixed-bottom">
      <footer className="footer">
        <div className="logoRodape">
          <Image src={LogoRodape} />
        </div>
        <div className="coluna-contato">
          <h3>Contato</h3>
          <p>Telefone: (28) 3524-2288</p>
          <p>Celular: (28) 99956-3579</p>
          <p>Email: comercial@dwgranitos.com.br</p>
        </div>
        <div className="coluna-endereco">
          <h3>Endereço</h3>
          <p>
            Rua Antônio Bazoni s/nº – Vargem Grande de Soturno Cachoeiro de
            Itapemirim - ES - CEP: 29321-000
          </p>
        </div>
        <div>
          <div className="coluna-links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/sobre"
                >
                  Quem somos
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/blog"
                >
                  Últimas Notícias
                </Link>
              </li>
              <li>
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  to="/contato"
                >
                  Contato
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

export default Footer;
