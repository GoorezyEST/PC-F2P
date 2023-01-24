import React, { useRef, useState, useEffect } from "react";
import "./Games.css";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useSettings } from "../../services/ContextProvider";

function Games() {
  const { games, page, setPage, loading, setLoading } = useSettings();
  const [paginatedData, setPaginatedData] = useState([]);
  const [counter, setCounter] = useState(0);
  const gridGamesRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const handleImageLoad = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  useEffect(() => {
    if (
      window.matchMedia("(min-width: 1920px) and (min-height: 1080px)").matches
    ) {
      setItemsPerPage(15);
    } else if (
      window.matchMedia("(min-width: 1440px) and (min-height: 900px)").matches
    ) {
      setItemsPerPage(12);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(games)) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setPaginatedData(games.slice(start, end));
    }
  }, [games, page]);

  useEffect(() => {
    setLoading(true);
    setCounter(0);
  }, [page]);

  useEffect(() => {
    if (counter !== 0) setLoading(false);
  }, [counter]);

  const handleClickPageScroll = () => {
    const width = window.matchMedia("(max-width: 900px)");
    if (width) {
      gridGamesRef.current.scrollTop = 0;
    } else {
      return;
    }
  };

  return (
    <div>
      {loading && <p className="loading_p">Loading ...</p>}
      <div className={loading ? "hide all_data" : "all_data"}>
        <section className="games" ref={gridGamesRef}>
          {paginatedData && paginatedData.length > 0 ? (
            paginatedData.map((item, index) => {
              return (
                <div key={index} className="games_card">
                  <figure className="games_card_content">
                    <img
                      src={
                        loading
                          ? "https://i.imgur.com/lY4XJq7.png"
                          : item.thumbnail
                      }
                      alt={`${item.title} picture`}
                      className={
                        loading ? "hide games_card_img" : "games_card_img"
                      }
                      onLoad={() => {
                        handleImageLoad();
                      }}
                    />
                    <div className="games_card_data">
                      <h3>{item.title}</h3>
                      <p>
                        Genre: <span>{item.genre}</span>
                      </p>
                      <p>
                        From: <span>{item.developer}</span>
                      </p>
                      <a
                        href={item.game_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Play Now
                      </a>
                    </div>
                  </figure>
                </div>
              );
            })
          ) : (
            <p>No games found.</p>
          )}
        </section>
        <div className="games_pagination">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(1);
              handleClickPageScroll();
            }}
          >
            <FaAngleDoubleLeft className="jump games_pagination_icon" />
          </button>
          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
              handleClickPageScroll();
            }}
          >
            <FaAngleLeft className="games_pagination_icon" />
          </button>
          <p>{page}</p>
          <button
            disabled={page === Math.ceil(games.length / itemsPerPage)}
            onClick={() => {
              setPage(page + 1);
              handleClickPageScroll();
            }}
          >
            <FaAngleRight className="games_pagination_icon" />
          </button>
          <button
            disabled={page === Math.ceil(games.length / itemsPerPage)}
            onClick={() => {
              setPage(Math.ceil(games.length / itemsPerPage));
              handleClickPageScroll();
            }}
          >
            <FaAngleDoubleRight className="jump games_pagination_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Games;
