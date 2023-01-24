import React, { createContext, useState, useContext } from "react";
import { options } from "./Private";

const GamesContext = createContext();

export function GamesProvider({ children }) {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeGenres, setActiveGenres] = useState([]);

  async function fetchAllGames() {
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=popularity",
        options
      );
      response.json().then((data) => setGames(data));
    } catch (err) {
      return console.error(err);
    }
  }

  async function fetchGenreGames() {
    try {
      var url = "https://free-to-play-games-database.p.rapidapi.com/api/";

      if (activeGenres.length === 1) {
        const response = await fetch(
          url.concat(
            `games?platform=pc&sort-by=popularity&category=${activeGenres[0]}`
          ),
          options
        );
        response.json().then((data) => setGames(data));
        setGames(response);
      } else {
        let genreString = activeGenres.join(".");
        const response = await fetch(
          url.concat(
            `filter?platform=pc&sort-by=popularity&tag=${genreString}`
          ),
          options
        );
        response.json().then((data) => setGames(data));
        setGames(response);
      }
    } catch (err) {
      return console.error(err);
    }
  }

  return (
    <GamesContext.Provider
      value={{
        games,
        setGames: fetchAllGames,
        setGamesGender: fetchGenreGames,
        page,
        setPage: setPage,
        loading,
        setLoading: setLoading,
        activeGenres,
        setActiveGenres: setActiveGenres,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
