import { useLocation } from "react-router-dom";
import HeaderGeneral from "./HeaderGeneral";
import "../components/QuizResults.css";
import Button from "./Button";
import { useRef } from "react";
import { useEffect } from "react";

export default function QuizResults() {
  const location = useLocation();
  const { correctAnswersCount, quizTitle } = location.state;

  //message and title based on the score
  let message, title;
  if (correctAnswersCount <= 1) {
    title = "Novice";
    message = "Everyone started somewhere!";
  } else if (correctAnswersCount <= 3) {
    title = "Beginner";
    message = "Okay, you notice birds around you!";
  } else if (correctAnswersCount === 4) {
    title = "Intermediate";
    message = "So close to the master, well done!";
  } else if (correctAnswersCount === 5) {
    title = "Master";
    message = "That's a real bird spotter!";
  }

  return (
    <>
      <HeaderGeneral title="Quiz" />
      <section className="quizDescription">
        <div className="quizResultsContainer">
          <h2>{quizTitle}</h2>
          <hr className="separator" role="presentation" />
          <h2 className="quizScore" aria-label="Your score is: ">
            {correctAnswersCount}/5
          </h2>
          <p className="messageQuiz">{message}</p>
          <Button text="ALL QUIZZES" to="/quizzes" />
        </div>
      </section>
    </>
  );
}
