import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GamesProvider } from "./services/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GamesProvider>
      <App />
    </GamesProvider>
  </React.StrictMode>
);
