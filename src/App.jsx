import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage /> */}
      <LoginPage />
    </>
  );
}

export default App;
