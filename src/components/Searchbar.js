import React, { useState } from "react";

import "./Searchbar.css";
import imagen from "../assets/MovieFlex.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState([]);

  const fetchData = (value) => {
    const API_KEY = "52adeacd0c360c97cfb3694145d2dc13";
    const url = `https://api.themoviedb.org/3/search/multi?query=${value}&api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.filter((user) => {
          return (
            value &&
            user &&
            user.title &&
            user.title.toLowerCase().includes(value) &&
            user.poster_path
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="container">
      <Link to={"/"}>
        <img className="imagen" src={imagen} alt="" />
      </Link>
      <div className="inputWrapper">
        <FaMagnifyingGlass />
        <input
          placeholder="Type to search..."
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
