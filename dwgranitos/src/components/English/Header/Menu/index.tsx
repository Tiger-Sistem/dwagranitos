import { Link } from "react-router-dom";
import "./style.css";

function MenuEnglish() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/en">Home</Link>
        </li>
        <li>
          <Link to="/en/about">About Us</Link>
        </li>
        <li>
          <Link to="/en/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/en/engineering">Engineering</Link>
        </li>
        <li>
          <Link to="/en/blog">Blog</Link>
        </li>
        <li>
          <Link to="/en/quote">Quote</Link>
        </li>
        <li>
          <Link to="/en/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuEnglish;
