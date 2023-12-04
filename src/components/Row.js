import React, { useEffect, useState } from "react";

import axios from "../axios";
import "./Row.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, RowId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById(RowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(RowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  //console.log(movies)

  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="row">
        <FaChevronLeft className="buttonsLeft" onClick={slideLeft} />
        <div id={RowId} className="rowImg">
          {movies.map((movie) => (
            <Link to={`/Movie/${movie.id}`} key={movie.id}>
              <img
                className="card"
                src={`${baseURL}${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          ))}
        </div>
        <FaChevronRight className="buttonsRight" onClick={slideRight} />
      </div>
    </div>
  );
}

export default Row;
