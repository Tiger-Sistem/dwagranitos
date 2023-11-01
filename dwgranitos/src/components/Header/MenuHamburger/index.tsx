import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Define isOpen como false para fechar o menu
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
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={closeMenu}>
              Quem somos
            </Link>
          </li>
          <li>
            <Link to="/catalogo" onClick={closeMenu}>
              Catálogo
            </Link>
          </li>
          <li>
            <Link to="/engenharia" onClick={closeMenu}>
              Engenharia
            </Link>
          </li>
          {/* <li>
            <Link to="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li> */}
          <li>
            <Link to="/orcamento" onClick={closeMenu}>
              Orçamento
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={closeMenu}>
              Contato
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuHamburger;
