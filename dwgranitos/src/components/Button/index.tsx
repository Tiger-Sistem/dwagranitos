import React from "react";
import "./styles.css";

interface ButtonProps {
  buttonText: string;
}
const Button = ({ buttonText }: ButtonProps) => {
  return (
    <div className="button-container">
      <button className="catalog-button" style={{ backgroundColor: "#800020" }}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
