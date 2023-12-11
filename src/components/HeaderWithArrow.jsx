import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import "./HeaderWithArrow.css";

export default function HeaderWithArrow({ title }) {
  //handle goBack navigation
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This will navigate one page back
  };
  return (
    <header className="pageHeader">
      <img
        src={arrow}
        alt="Arrow to lead page back"
        className="backArrow"
        onClick={handleGoBack}
      />
      <h2 className="pageName">{title}</h2>
    </header>
  );
}
