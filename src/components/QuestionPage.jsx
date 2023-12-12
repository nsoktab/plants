import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizContext } from "../config/QuizContext";
import Button from "./Button";
import "../components/QuestionPage.css";
import HeaderGeneral from "./HeaderGeneral";

const QuestionPage = () => {
  const navigate = useNavigate();
  let { quizId, questionNumber } = useParams();
  let quizzes = useContext(QuizContext);

  //get information about current question
  const [quiz, setQuiz] = useState();

  useEffect(() => {
    const quizData = quizzes.find((q) => q.id === quizId);
    setQuiz(quizData);
  }, [[]]);

  //state for chosen answer - render button to next question
  const [answerChosen, setAnswerChosen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleAnswerSelection = (answer) => {
    if (answerChosen) {
      return;
    }
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    setAnswerChosen(true);
  };

  if (!quiz) {
    return <p>Quiz is loading</p>;
  }

  //all information about current question
  const currentQuestion = quiz.questions[questionNumber - 1];
  const question = currentQuestion.question;
  const image = currentQuestion.image;
  const answers = currentQuestion.answers;
  const quizTitle = quiz.title;

  //show next question
  const handleNextQuestion = () => {
    const nextQuestionNumber = Number(questionNumber) + 1;
    if (isLastQuestion) {
      navigate(`/quizzes/${quizId}/results`, {
        state: { correctAnswersCount, quizTitle },
      });
    } else {
      navigate(`/quizzes/${quizId}/${nextQuestionNumber}`);
    }
    console.log("correct answers: ", correctAnswersCount);
    setAnswerChosen(false);
    setSelectedAnswer(null);
  };

  //change the text on btn of it is the last question
  const isLastQuestion = questionNumber == 5;

  return (
    <>
      <HeaderGeneral title={quiz.title} className="smallerFont" />
      <div className="questionContent">
        <h2>Question {questionNumber}</h2>
        <hr className="separator" />
        <p className="questionQuiz">{question}</p>
        {image && (
          <img
            src={image}
            alt="Image of the correct bird"
            className="imgQuiz"
          />
        )}
        <div className="answersQuiz">
          {answers.map((answer, index) => {
            const letter = String.fromCharCode(65 + index);
            const isCorrect = answer === currentQuestion.correctAnswer;
            const isSelected = answer === selectedAnswer;
            let className = "answer";
            if (selectedAnswer !== null) {
              if (isSelected) {
                className += isCorrect ? " correct" : " incorrect";
              } else if (isCorrect) {
                className += " correct";
              }
            }
            return (
              <div
                className={className}
                onClick={() => handleAnswerSelection(answer)}
                key={index}
              >
                <p>
                  {letter}. {answer}
                </p>
              </div>
            );
          })}
        </div>
        {answerChosen && (
          <div className="btnContainer">
            <Button
              onClick={handleNextQuestion}
              text={isLastQuestion ? "FINISH QUIZ" : "Next Question"}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionPage;
