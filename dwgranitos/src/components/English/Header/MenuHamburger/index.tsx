import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const MenuHamburgerEnglish = () => {
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
            <Link to="/en" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/en/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/en/catalog" onClick={closeMenu}>
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/en/engineering" onClick={closeMenu}>
              Engineering
            </Link>
          </li>
          <li>
            <Link to="/en/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/en/quote" onClick={closeMenu}>
              Quote
            </Link>
          </li>
          <li>
            <Link to="/en/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuHamburgerEnglish;
