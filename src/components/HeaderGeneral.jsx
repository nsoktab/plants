import logo from "../assets/logo.webp";
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
        <h1 className={props.className}>{props.title}</h1>
        <div className="logoHeader"></div>
      </div>
    </header>
  );
}
