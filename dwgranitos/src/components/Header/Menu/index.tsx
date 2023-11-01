import { Link } from "react-router-dom";
import "./style.css";

function Menu() {
  return (
    <nav className="nav">
      <ul className="nav-list">
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
        {/* <li>
          <Link to="/blog">Blog</Link>
        </li> */}
        <li>
          <Link to="/orcamento">Orçamento</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
