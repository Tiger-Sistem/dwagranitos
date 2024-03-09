import React from "react";
import "./styles.css";
import imagem from "../../../assets/images/company.jpg";
const CorpoHome = () => {
  return (
    <div className="corpo">
      <div className="texto">
        <h2>DW GRANITOS</h2>
        <p>
          Welcome to DW Granitos! We are a specialized company in the supply and
          installation of high-quality granite products. With years of
          experience and dedication, we pride ourselves on offering our
          customers a wide range of granite options, from kitchen and bathroom
          countertops to floor and facade cladding.
        </p>
        <p>
          At DW Granitos, we combine craftsmanship with advanced technology to
          create customized products that meet the needs and expectations of
          each customer. Our highly skilled team is ready to assist at every
          stage of the process, from planning and material selection to precise
          installation and impeccable finishing.
        </p>
        <p>
          We prioritize excellence in every aspect of our work, ensuring that
          each project is executed with perfection and durability. Additionally,
          we aim to build lasting relationships with our customers, based on
          trust, transparency, and mutual satisfaction.
        </p>
        <p>
          If you are seeking top-quality granite solutions for your residence,
          business, or construction project, DW Granitos is the right choice.
          Contact us today and let us turn your ideas into reality.
        </p>
      </div>
      <div className="imagemCompany">
        <img src={imagem} alt="Imagem" />
      </div>
    </div>
  );
};

export default CorpoHome;
