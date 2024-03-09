import React from "react";
import "./styles.css";
const NameCompany = () => {
  return (
    <div>
      <hr className="linhaFooter" />
      <div>
        <p className="nome-empresa">
          Desenvolvido por{" "}
          <a
            href="https://www.tigersistem.com"
            style={{
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Tiger System
          </a>
        </p>
      </div>
    </div>
  );
};

export default NameCompany;
