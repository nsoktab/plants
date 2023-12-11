import "./App.css";
import Nav from "./components/Nav";
import QuestionPage from "./components/QuestionPage";
import { QuizProvider } from "./config/QuizContext";
import AtlasPage from "./pages/Atlas";
import BirdPage from "./pages/BirdPage";
import HomePage from "./pages/HomePage";
import Identify from "./pages/Identify";
import QuizDescription from "./pages/QuizDescription";
import QuizzesOverview from "./pages/QuizzesOverview";
import SplashPage from "./pages/SplashPage";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  // Conditionally render Nav based on the current route
  const isSplashPage = location.pathname === "/splash";
  const showNav = !isSplashPage;

  // You can also add more complex logic to conditionally show/hide Nav based on other criteria

  return (
    <>
      {showNav && <Nav location={location} />}
      <QuizProvider>
        <Routes>
          <Route path="/splash" element={<SplashPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/atlas" element={<AtlasPage />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/birds/:birdId" element={<BirdPage />} />
          <Route path="/quizzes" element={<QuizzesOverview />} />
          <Route path="/quizzes/:quizId" element={<QuizDescription />} />
          <Route
            path="/quizzes/:quizId/:questionNumber"
            element={<QuestionPage />}
          />
        </Routes>
      </QuizProvider>
    </>
  );
};

export default App;
