import logo from "../assets/logo.png";
import "../components/HeaderGeneral.css";
export default function HeaderGeneral(props) {
  return (
    <header className="headerGeneral">
      <div className="headerHomeG">
        <img
          src={logo}
          alt="App logo - flying small, yellow bird"
          className="logoHeader"
        />
        <h1>{props.title}</h1>
        <div className="logoHeader"></div>
      </div>
    </header>
  );
}
