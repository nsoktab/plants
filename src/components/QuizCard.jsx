import { Link, useNavigate } from "react-router-dom";
import "../components/QuizCard.css";
import React from "react";

const QuizCard = ({ quiz, fullWidth }) => {
  const { id, title, backgroundImg } = quiz;

  const cardStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  let cardClass = fullWidth
    ? "quizCard fullWidthCard"
    : "quizCard halfWidthCard";

  if (window.innerWidth < 230) {
    cardClass = "quizCard fullWidthCard";
  }

  const navigate = useNavigate();

  function goToQuiz() {
    navigate(`/quizzes/${id}`);
  }
  return (
    <div className={cardClass} style={cardStyle} onClick={goToQuiz}>
      <div className="overlayQuizCard"></div>
      <h4 className="quizCardTitle">{title}</h4>
    </div>
  );
};

export default QuizCard;
