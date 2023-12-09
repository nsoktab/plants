import HeaderGeneral from "../components/HeaderGeneral";
import "../pages/Identify.css";

export default function Identify() {
  return (
    <>
      <HeaderGeneral />
      <h4 className="identifyCopy">
        Not sure what bird you've observed? <br />
        Let us try to help you!
      </h4>

      <div className="identifyPlaceholder">
        <p>Click here to allow Birdspotter access to your camera 📸</p>
      </div>
    </>
  );
}
