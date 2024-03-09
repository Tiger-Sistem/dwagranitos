import { useEffect, useState } from "react";

const Contato = () => {
  const [titulo, setTitulo] = useState("Contato");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
  return (
    <div>
      <h1> Em contrução</h1>
    </div>
  );
};

export default Contato;
