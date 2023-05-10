import "./style.css";

function Menu() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sobre">Quem somos</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
