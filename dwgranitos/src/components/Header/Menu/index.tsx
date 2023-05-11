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
          <a href="/catalogo">Catálogo</a>
        </li>
        <li>
          <a href="/engenharia">Engenharia</a>
        </li>
        <li>
          <a href="/pisos">Pisos</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/orcamento">Orçamento</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
