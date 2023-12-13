import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"; // import the CSS file

export default function Button({ to, text, fullWidth, onClick, className }) {
  const buttonClass = fullWidth ? "button fullWidth" : "button halfWidth";
  const combinedClass = `${buttonClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {text}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={combinedClass}>
        {text}
      </button>
    );
  }
}
