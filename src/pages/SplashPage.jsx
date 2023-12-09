import { useEffect } from "react";
import logo from "../assets/logo.png";
import "../pages/SplashPage.css";

export default function SplashPage() {
  useEffect(() => {
    // After 2000 milliseconds (2 seconds), redirect to the homepage
    const timeoutId = setTimeout(() => {
      window.location.href = "/"; // Redirect to the homepage
    }, 2000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

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
