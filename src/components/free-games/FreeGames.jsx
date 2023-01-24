import React from "react";
import "./FreeGames.css";
import Games from "../games/Games";
import Dropdown from "../dropdown/Dropdown";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FreeGames() {
  const navigate = useNavigate();

  return (
    <section className="free_section">
      <div className="free_filters">
        <FaArrowLeft className="return_icon" onClick={() => navigate("../")} />
        <Dropdown />
      </div>
      <div className="free_games">
        <Games />
      </div>
      <footer className="free_footer">
        <h3>PC F2P</h3>
        <p>
          Powered by{" "}
          <a
            href="https://www.freetogame.com/api-doc"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreeToGame
          </a>
        </p>
      </footer>
    </section>
  );
}

export default FreeGames;
