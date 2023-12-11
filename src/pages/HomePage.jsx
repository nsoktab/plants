import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import BirdOfTheDay from "../components/BirdOfTheDay";
import HomeHeader from "../components/HomeHeader";
import "../pages/HomePage.css";
import QuizCard from "../components/QuizCard";
import "../pages/Atlas.css";
import { useContext } from "react";
import { QuizContext } from "../config/QuizContext";
import Button from "../components/Button";

export default function HomePage() {
  const quizzes = useContext(QuizContext);
  return (
    <>
      <HomeHeader />
      <div className="bigRectangle"></div>
      <BirdOfTheDay />

      <section className="homeContent">
        <h2>Quiz Time </h2>
        <div className="quizCardsHome">
          {quizzes.slice(0, 2).map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
        <Button to="/quizzes" text="View all quizzes" fullWidth={true} />
      </section>
    </>
  );
}
