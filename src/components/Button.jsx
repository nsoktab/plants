import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"; // import the CSS file

export default function Button({ to, text, fullWidth, onClick }) {
  const buttonClass = fullWidth ? "button fullWidth" : "button halfWidth";

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {text}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={buttonClass}>
        {text}
      </button>
    );
  }
}
