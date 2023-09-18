import { useState } from "react";
import "./styles.css";

const Submenu = ({ onSelecionarComponente }: any) => {
  const [menuExpandido, setMenuExpandido] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState("TODOS");
  const [setaClassName, setSetaClassName] = useState(""); // Inicialize com "TODOS" ou o item padrão que você deseja
  // Inicialize com "TODOS" ou o item padrão que você deseja

  const handleClick = (componente: any) => {
    if (componente === "todos") {
      setItemSelecionado("Todos");
      setSetaClassName("todos");
    }
    if (componente === "gourmet-cozinha") {
      setItemSelecionado("Área Gourmet");
      setSetaClassName("seta");
    }
    if (componente === "pisos") {
      setItemSelecionado("Pisos");
      setSetaClassName("pisos");
    }
    if (componente === "fachada") {
      setItemSelecionado("Escadas");
      setSetaClassName("escadas");
    }
    if (componente === "residencial") {
      setItemSelecionado("Piscinas");
      setSetaClassName("piscinas");
    }

    onSelecionarComponente(componente);
    setMenuExpandido(false); // Feche o menu após clicar em um item
  };

  return (
    <div className={`submenu ${menuExpandido ? "expandido" : ""}`}>
      <button
        className="toggle-button"
        onClick={() => setMenuExpandido(!menuExpandido)}
      >
        {itemSelecionado}{" "}
        <i className={`fas fa-chevron-down ${setaClassName}`}></i>
      </button>
      <ul>
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
    </div>
  );
};

export default Submenu;
