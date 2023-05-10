import React from "react";
import "./style.css";
import Menu from "./Menu";
// import logo from "./logo.png"; // Importe seu logotipo ou substitua pelo caminho correto

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <Menu />
      </div>
    </header>
  );
}

export default Header;
