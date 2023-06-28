import { useState } from "react";
import "./styles.css";
import Submenu from "../../components/SubMenu";
import Title from "../../components/Title";
import { TodosComponent } from "../../components/Todos";
import { ComercialComponent } from "../../components/Todos/Comercial";
import PiscinasComponent from "../../components/Todos/Piscinas/PiscinasComponent";
import PisoComponent from "../../components/Todos/Pisos/PisoComponent";
import EscadasComponent from "../../components/Todos/Escadas/EscadasComponent";

const Engineering = () => {
  const [componenteAtivo, setComponenteAtivo] = useState("todos");

  const renderizarComponente = () => {
    switch (componenteAtivo) {
      case "todos":
        return <TodosComponent />;
      case "gourmet-cozinha":
        return <ComercialComponent />;
      case "pisos":
        return <PisoComponent />;
      case "fachada":
        return <EscadasComponent />;
      case "residencial":
        return <PiscinasComponent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Title title="Engenharia" />
      <div className="EngenhariaSubMenu">
        <Submenu onSelecionarComponente={setComponenteAtivo} />
        {renderizarComponente()}
      </div>
    </div>
  );
};

export default Engineering;
