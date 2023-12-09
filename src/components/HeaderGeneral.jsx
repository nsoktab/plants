import logo from "../assets/logo.png";
import "../components/HeaderGeneral.css";
export default function HeaderGeneral() {
  return (
    <header className="headerGeneral">
      <div className="headerHomeG">
        <img
          src={logo}
          alt="App logo - flying small, yellow bird"
          className="logoHeader"
        />
      </div>
    </header>
  );
}
