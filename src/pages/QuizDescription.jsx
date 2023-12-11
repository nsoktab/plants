import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../config/QuizContext";
import Button from "../components/Button";
import HeaderGeneral from "../components/HeaderGeneral";
import "./QuizDescription.css";

export default function QuizDescription() {
  const { quizId } = useParams();
  const quizzes = useContext(QuizContext);

  const quiz = quizzes.find((q) => q.id === quizId);

  if (!quiz) {
    return <p>Quiz not found</p>;
  }

  return (
    <section className="quizDescription">
      <HeaderGeneral title="Quiz" />
      <div className="quizDescriptionContent">
        <h4>{quiz.title}</h4>
        <p>{quiz.description}</p>
        <Button to={`/quizzes/${quizId}/1`} text="Start Quiz" />
      </div>
    </section>
  );
}
