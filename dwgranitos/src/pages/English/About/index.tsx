import { useEffect, useState } from "react";
import CorpoHome from "../../../components/English/Corpo";
import Title from "../../../components/English/Title";

const AboutEnglish = () => {
  const [titulo, setTitulo] = useState("Quem somos");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);

  return (
    <div>
      <Title title="Quem somos" />
      <CorpoHome />
    </div>
  );
};

export default AboutEnglish;
