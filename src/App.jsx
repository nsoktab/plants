import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Student from "./components/Student";
import Info from "./components/Info";

export const AuthUserContext = createContext();

const user = { name: "Natalia", age: 24, mood: "😆 🌞" };

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthUserContext.Provider value={user}>
        <Info />
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Good Morning</h1>
        <h2>It's Thursday Again, Why is it changed automatically</h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <Student />
      </AuthUserContext.Provider>
    </>
  );
}

export default App;
