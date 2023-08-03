import "./styles.css";

const Submenu = ({ onSelecionarComponente }: any) => {
  const handleClick = (componente: any) => {
    onSelecionarComponente(componente);
  };

  return (
    <ul className="submenu">
      <li>
        <a href="#" onClick={() => handleClick("todos")}>
          TODOS
        </a>
      </li>
      <li>
        <a href="#" onClick={() => handleClick("gourmet-cozinha")}>
          ÁREA GOURMET & COZINHAS
        </a>
      </li>
      <li>
        <a href="#" onClick={() => handleClick("pisos")}>
          PISOS
        </a>
      </li>
      <li>
        <a href="#" onClick={() => handleClick("fachada")}>
          ESCADAS
        </a>
      </li>
      <li>
        <a href="#" onClick={() => handleClick("residencial")}>
          PISCINAS
        </a>
      </li>
    </ul>
  );
};

export default Submenu;
