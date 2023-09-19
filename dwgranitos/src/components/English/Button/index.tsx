import React from "react";
import "./styles.css";

interface ButtonProps {
  buttonText: string;
}
const Button = ({ buttonText }: ButtonProps) => {
  return (
    <div className="button-container">
      <button className="catalog-button">{buttonText}</button>
    </div>
  );
};

export default Button;
