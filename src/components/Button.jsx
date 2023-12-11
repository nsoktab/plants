import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"; // import the CSS file

export default function Button({ to, text, fullWidth }) {
  const buttonClass = fullWidth ? "button fullWidth" : "button halfWidth";

  return (
    <Link to={to} className={buttonClass}>
      {text}
    </Link>
  );
}
