import { useEffect, useState } from "react";
import "./styles.css";
import Submenu from "../../../components/English/SubMenu";
import Title from "../../../components/English/Title";
import { TodosComponent } from "../../../components/English/Todos";
import { ComercialComponent } from "../../../components/English/Todos/Comercial";
import PiscinasComponent from "../../../components/English/Todos/Piscinas/PiscinasComponent";
import PisoComponent from "../../../components/English/Todos/Pisos/PisoComponent";
import EscadasComponent from "../../../components/English/Todos/Escadas/EscadasComponent";

const EngineeringEnglish = () => {
  const [componenteAtivo, setComponenteAtivo] = useState("todos");
  const [titulo, setTitulo] = useState("Engenharia");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);

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

export default EngineeringEnglish;
