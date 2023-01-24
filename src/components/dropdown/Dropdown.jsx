import React from "react";
import { useRef, useEffect } from "react";
import { useSettings } from "../../services/ContextProvider";
import "./Dropdown.css";
import data from "./filters.json";

function Dropdown() {
  const {
    setGamesGender,
    setGames,
    setPage,
    setLoading,
    activeGenres,
    setActiveGenres,
  } = useSettings();
  const dropdownRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !contentRef.current.contains(e.target) &&
        dropdownRef.current.classList.contains("show_dropdown")
      ) {
        dropdownRef.current.classList.remove("show_dropdown");
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [contentRef]);

  const filterCheck = (filter) => {
    if (activeGenres.length === 3 && !activeGenres.includes(filter)) {
      alert("You have reached the maximum number of genres");
      return;
    } else {
      setLoading(true);
      setPage(1);
      if (activeGenres.includes(filter)) {
        setActiveGenres(activeGenres.filter((genre) => genre !== filter));
      } else {
        setActiveGenres(activeGenres.concat([filter]));
      }
    }
  };

  useEffect(() => {
    if (activeGenres.length !== 0) {
      setGamesGender(activeGenres);
    } else {
      setGames();
    }
  }, [activeGenres]);

  return (
    <div
      className="dropdown"
      ref={contentRef}
      onClick={(e) => {
        if (contentRef.current.contains(e.target)) {
          if (dropdownRef.current.classList.contains("show_dropdown")) {
            dropdownRef.current.classList.remove("show_dropdown");
          } else {
            dropdownRef.current.classList.add("show_dropdown");
          }
        } else {
          return;
        }
      }}
    >
      <p>FILTER</p>
      <div
        className="dropdown-content"
        ref={dropdownRef}
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className={
            activeGenres.length === 0
              ? "active filters-options"
              : "filters-options"
          }
          onClick={() => {
            setActiveGenres([]);
            setGames();
            setPage(1);
          }}
        >
          ALL
        </span>
        {data.genders.map((item, index) => {
          return (
            <span
              key={index}
              className={
                activeGenres.includes(item.name)
                  ? "active filters-options"
                  : "filters-options"
              }
              onClick={() => {
                filterCheck(item.name);
              }}
            >
              {item.name.toUpperCase().replace("-", " ")}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
