import React, { useEffect, useRef } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSettings } from "./services/ContextProvider";
import Home from "./components/home/Home";
import FreeGames from "./components/free-games/FreeGames";
import About from "./components/about/About";
import Error from "./components/error/Error";

function App() {
  const { setGames } = useSettings();
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      setGames();
      didMount.current = true;
    }
  }, [setGames]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/games" element={<FreeGames />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
