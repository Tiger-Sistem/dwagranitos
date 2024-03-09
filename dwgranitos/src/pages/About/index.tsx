import { useEffect, useState } from "react";
import CorpoHome from "../../components/Corpo";
import Title from "../../components/Title";

const About = () => {
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

export default About;
