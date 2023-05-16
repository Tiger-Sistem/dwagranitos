import React from "react";
import "./styles.css";
import imagem from "../../assets/images/company.jpg";
const CorpoHome = () => {
  return (
    <div className="corpo">
      <div className="texto">
        <h2>DW GRANITOS</h2>
        <p>
          A Dw Granitos é uma empresa atuante no setor da construção civil
          especializada em soluções através de rochas ornamentais, fundada em
          Março de 2000 a empresa conta com mais de 20 anos de experiência
          fornecendo pisos, bancadas, fachadas e design de interiores. Hoje a DW
          Granitos é sinônimo de agilidade, qualidade e compromisso com seus
          clientes, contando com a logística completa desde a jazida até a sua
          entrega, nossa equipe se prepara a cada dia para trazermos o melhor
          custo-benefício para sua obra. Venha conhecer mais sobre nossa empresa
          e linha completa de produtos e serviços.
        </p>
      </div>
      <div className="imagem">
        <img src={imagem} alt="Imagem" />
      </div>
    </div>
  );
};

export default CorpoHome;
