import HeaderGeneral from "../components/HeaderGeneral";
import map from "../assets/map.webp";
import "../pages/Profile.css";
import arrowRight from "../assets/arrowRight.svg";

export default function Profile() {
  return (
    <>
      <HeaderGeneral />
      <div className="profileElements">
        <div className="blackContainer"></div>
        <img src={map} alt="Map of Denmark" className="mapProfile" />
        <div className="optionsProfile">
          <div className="optionProfile">
            {" "}
            <p>Your observations</p>
            <img src={arrowRight} alt="" />
          </div>
          <div className="optionProfile">
            {" "}
            <p>Birds Checklist</p>
            <img src={arrowRight} alt="" />
          </div>
          <div className="optionProfile">
            <p>Settings</p>
            <img src={arrowRight} alt="" />
          </div>
        </div>

        <div className="logOut">
          <p>Log out</p>
        </div>
      </div>
    </>
  );
}
