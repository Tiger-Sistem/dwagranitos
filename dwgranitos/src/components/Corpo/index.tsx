import React from "react";
import "./styles.css";
import imagem from "../../assets/images/company.jpg";
const CorpoHome = () => {
  return (
    <div className="corpo">
      <div className="texto">
        <h2>DW GRANITOS</h2>
        <p>
        Bem-vindo à DW Granitos! Somos uma empresa especializada no beneficiamento e fornecimento de rochas ornamentais. Com mais de 20 anos de experiência e dedicação, localizada na (endereço), nos orgulhamos de oferecer aos nossos clientes uma ampla variedade de opções de granitos, mármores, quartzitos e exóticos, desde bancadas de cozinha e banheiro até revestimentos de pisos e fachadas.        </p>
        <p>
        Na DW Granitos, combinamos habilidade artesanal com tecnologia avançada para criar produtos sob medida que atendam às necessidades e expectativas de cada cliente. Nossa equipe altamente qualificada está pronta para ajudar em todas as etapas do processo, desde o planejamento e escolha dos materiais até a instalação precisa e finalização impecável.        </p>
        <p>
        Priorizamos a excelência em todos os aspectos do nosso trabalho, garantindo que cada projeto seja executado com perfeição e durabilidade. Além disso, buscamos estabelecer relacionamentos duradouros com nossos clientes, baseados na confiança, transparência e satisfação mútua.        </p>
        <p>
        Se você está buscando soluções em granito de qualidade superior para sua residência, comércio ou projeto de construção, a DW Granitos é a escolha certa. Entre em contato conosco hoje mesmo e permita-nos transformar suas ideias em realidade.        </p>
      </div>
      <div className="imagemCompany">
        <img src={imagem} alt="Imagem" />
      </div>
    </div>
  );
};

export default CorpoHome;
