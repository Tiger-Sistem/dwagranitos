import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`menu-icon ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isOpen && (
        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Quem somos</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
          <li>
            <Link to="/engenharia">Engenharia</Link>
          </li>
          <li>
            <Link to="/pisos">Pisos</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/orcamento">Orçamento</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuHamburger;
