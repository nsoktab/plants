import { useContext } from "react";
import { QuizContext } from "../config/QuizContext";
import QuizCard from "../components/QuizCard";
import HeaderWithArrow from "../components/HeaderWithArrow";
import "../pages/QuizzesOverview.css";

export default function QuizzesOverview() {
  const quizzes = useContext(QuizContext); // use the useContext hook to access the quizzes data
  return (
    <>
      <HeaderWithArrow title="Quizzes" />

      <section className="quizzesOverview">
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} fullWidth={true} />
        ))}
      </section>
    </>
  );
}
