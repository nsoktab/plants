import { createContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebase";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const quizzesCollectionRef = collection(db, "quizzes");

      try {
        const querySnapshot = await getDocs(quizzesCollectionRef);
        const quizzesData = [];

        // Use Promise.all to wait for all quiz queries to complete
        await Promise.all(
          querySnapshot.docs.map(async (quizDoc) => {
            const quizData = quizDoc.data();

            const questionsCollectionRef = collection(quizDoc.ref, "questions");
            const questionsQuerySnapshot = await getDocs(
              questionsCollectionRef
            );

            const questionsData = [];
            questionsQuerySnapshot.forEach((questionDoc) => {
              questionsData.push({ id: questionDoc.id, ...questionDoc.data() });
            });

            quizData.questions = questionsData;
            quizzesData.push({ id: quizDoc.id, ...quizData }); // Include both id and data
          })
        );

        setQuizzes(quizzesData);
        console.log(quizzesData);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <QuizContext.Provider value={quizzes}>{children}</QuizContext.Provider>
  );
}
