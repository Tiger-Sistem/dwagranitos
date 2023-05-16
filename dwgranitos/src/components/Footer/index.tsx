import React from "react";
import "./styles.css";
import NameCompany from "./nameEmpresa";

const Footer = () => {
  return (
    <div className="divFooter navbar-fixed-bottom">
      <footer className="footer">
        <div className="logo">Logo</div>
        <div className="coluna-contato">
          <h3>Contato</h3>
          <p>Telefone: (28) 3524-2288</p>
          <p>Celular: (28) 99956-3579</p>
          <p>Email: exemplo@example.com</p>
        </div>
        <div className="coluna-endereco">
          <h3>Endereço</h3>
          <p>Endereço</p>
        </div>
        <div>
          <div className="coluna-links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Últimas Notícias</a>
              </li>
              <li>
                <a href="#">Entre em Contato</a>
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
