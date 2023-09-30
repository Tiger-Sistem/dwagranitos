import React, { ReactNode } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  buttonText: string;
  to: string;
}
const Button = ({ buttonText, to }: ButtonProps) => {
  return (
    <>
      <Link className="linkButton" to={to}>
        <div className="button-container">
          <button className="catalog-button">{buttonText}</button>
        </div>
      </Link>
    </>
  );
};

export default Button;
