import { useEffect } from "react";
import logo from "../assets/logo.png";
import "../pages/SplashPage.css";
import { useNavigate } from "react-router-dom";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000); // redirect after 3 seconds
  }, [navigate]);

  return (
    <div className="splash">
      <img
        src={logo}
        alt="App logo - flying small, yellow bird"
        className="logoSplash"
      />
      <h1>BIRDSPOTTER</h1>
      <h3>Your Ultimate Bird Watching App</h3>
    </div>
  );
}
