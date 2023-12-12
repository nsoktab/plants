import { useLocation } from "react-router-dom";
import HeaderGeneral from "./HeaderGeneral";
import "../components/QuizResults.css";
import Button from "./Button";

export default function QuizResults() {
  const location = useLocation();
  const { correctAnswersCount, quizTitle } = location.state;

  let message;
  if (correctAnswersCount <= 1) {
    message = "Everyone started somewhere!";
  } else if (correctAnswersCount <= 3) {
    message = "Okay, you notice things!";
  } else if (correctAnswersCount === 4) {
    message = "So close to the master, well done!";
  } else if (correctAnswersCount === 5) {
    message = "That's a real bird spotter!";
  }

  return (
    <>
      <HeaderGeneral />
      <div className="quizResultsContainer">
        <h2>{quizTitle}</h2>
        <hr className="separator" />
        <p>You scored {correctAnswersCount} out of 5</p>
        <p>{message}</p>
        <Button text="ALL QUIZZES" to="/quizzes" />
      </div>
    </>
  );
}
