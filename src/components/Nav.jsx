import home from "../assets/home_icon.svg";
import atlas from "../assets/atlas_icon.svg";
import identify from "../assets/identify_icon.svg";
import profile from "../assets/profile_icon.svg";
import { NavLink, useLocation } from "react-router-dom";
import "../components/Nav.css";

export default function Nav() {
  const location = useLocation();
  console.log(location);

  const isHomeActive =
    location.pathname === "/home" || location.pathname.includes("/quiz");

  const isAtlasActive =
    location.pathname === "/atlas" || location.pathname.includes("/birds/");

  const isIdentifyActive =
    location.pathname === "/identify" || location.pathname.includes("/404");

  const isProfileActive =
    location.pathname === "/profile" ||
    location.pathname === "/settings" ||
    location.pathname === "/myfriends";

  return (
    <nav className="bottom-nav">
      <NavLink
        exact
        to="/home"
        className={`nav-link ${isHomeActive ? "active" : ""}`}
      >
        <img src={home} alt="Home" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/atlas"
        className={`nav-link ${isAtlasActive ? "active" : ""}`}
      >
        <img src={atlas} alt="Atlas of Birds" />
        <span>Atlas</span>
      </NavLink>
      {/*}
      <NavLink
        to="/identify"
        className={`nav-link ${isIdentifyActive ? "active" : ""}`}
      >
        <img src={identify} alt="Identiy Bird" />
        <span>Identify</span>
  </NavLink>*/}

      <NavLink
        to="/profile"
        className={`nav-link ${isProfileActive ? "active" : ""}`}
      >
        <img src={profile} alt="Profile" />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}
