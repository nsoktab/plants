import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"; // import the CSS file

export default function Button({
  to,
  text,
  fullWidth,
  onClick,
  className,
  ariaLabel,
}) {
  const buttonClass = fullWidth ? "button fullWidth" : "button halfWidth";
  const combinedClass = `${buttonClass} ${className}`;

  if (to) {
    return (
      <Link
        to={to}
        className={combinedClass}
        aria-label={ariaLabel}
        role="button"
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button
        role="button"
        onClick={onClick}
        className={combinedClass}
        aria-label={ariaLabel}
      >
        {text}
      </button>
    );
  }
}
