import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UpdatePage from "./pages/UpdatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Congratulations from "./components/congratulations/Congratulations";

export const UserContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ upc_id: "upc101903938" });

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route
            path="/register"
            element={<RegisterPage setUser={setUser} />}
          />
          <Route
            path="/login"
            element={
              <LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            }
          />
          <Route path="/profile" element={<UpdatePage setUser={setUser} />} />
          <Route path="/congrats" element={<Congratulations />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export { App };
