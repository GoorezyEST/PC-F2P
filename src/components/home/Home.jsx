import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <header className="home_header">
        <div className="home_header_text">
          <h1>PC F2P</h1>
          <p>+300 Free to play games</p>
          <p style={{ margin: "2.5rem 0" }}>
            Where gaming is free, start play with glee!
          </p>
          <div className="home_links">
            <Link to={"/games"} className="home_links_link">
              Search games
            </Link>
            <span className="home_links_bar">|</span>
            <Link className="home_links_link" to={"/about"}>
              About us
            </Link>
          </div>
          <p>
            Powered by{" "}
            <a
              href="https://www.freetogame.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FreeToGame
            </a>
          </p>
        </div>
      </header>
    </section>
  );
}

export default Home;
