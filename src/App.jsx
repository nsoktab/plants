import "./App.css";
import Nav from "./components/Nav";
import QuestionPage from "./components/QuestionPage";
import QuizResults from "./components/QuizResults";
import { QuizProvider } from "./config/QuizContext";
import AtlasPage from "./pages/Atlas";
import BirdPage from "./pages/BirdPage";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import Identify from "./pages/Identify";
import Profile from "./pages/Profile";
import QuizDescription from "./pages/QuizDescription";
import QuizzesOverview from "./pages/QuizzesOverview";
import SplashPage from "./pages/SplashPage";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  // Conditionally render Nav based on the current route
  const isSplashPage =
    location.pathname === "/" || location.pathname === "/createAccount";
  const showNav = !isSplashPage;

  // You can also add more complex logic to conditionally show/hide Nav based on other criteria

  return (
    <>
      {showNav && <Nav location={location} />}
      <QuizProvider>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/atlas" element={<AtlasPage />} />
          <Route path="/identify" element={<Identify />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/birds/:birdId" element={<BirdPage />} />
          <Route path="/quizzes" element={<QuizzesOverview />} />
          <Route path="/quizzes/:quizId" element={<QuizDescription />} />
          <Route
            path="/quizzes/:quizId/:questionNumber"
            element={<QuestionPage />}
          />
          <Route path="/quizzes/:quizId/results" element={<QuizResults />} />
          <Route path="*" element={<SplashPage />} />
        </Routes>
      </QuizProvider>
    </>
  );
};

export default App;
