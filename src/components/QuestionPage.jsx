import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../config/QuizContext";
import Button from "./Button";

const QuestionPage = () => {
  const { quizId, questionNumber } = useParams();
  const quizzes = useContext(QuizContext);
  const quiz = quizzes.find((q) => q.id === quizId);
  console.log("quiz", quiz);
  console.log("quiz description", quiz.description);

  if (!quiz) {
    return <p>Quiz not found</p>;
  }

  const currentQuestion = quiz.questions[questionNumber - 1].question;
  console.log("currentQuestion", currentQuestion);

  const handleNextQuestion = () => {
    // Add your logic for navigating to the next question
  };

  return (
    <div>
      <h2>Question {questionNumber}</h2>
      <p>{currentQuestion.text}</p>
      {/* Add options rendering here */}
      <Button onClick={handleNextQuestion}>Next Question</Button>
    </div>
  );
};

export default QuestionPage;
