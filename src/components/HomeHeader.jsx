import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Replace with the actual path to your logo
import "../components/HomeHeader.css";

const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`headerHome ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="logo" className="logoHome" />
      <h1>BIRDSPOTTER</h1>
    </header>
  );
};

export default HomeHeader;
