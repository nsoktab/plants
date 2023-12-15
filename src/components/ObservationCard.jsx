import Button from "./Button";
import pigeon from "../assets/pigeon.webp";
import "../components/ObservationCard.css";

export default function ObservationCard({ observation }) {
  return (
    <div className="observationCardEmpty">
      <img
        src={pigeon}
        alt="Paper filled with pigeon name"
        className="imgPigeon"
      />
      <div className="contentObservationCard">
        <h4>You have no observations yet!</h4>
        <div className="btnContainer">
          {" "}
          <Button
            text="Add an observation"
            to="/createAccount"
            ariaLabel="Button - Add an observation"
          />
        </div>
      </div>
    </div>
  );
}
