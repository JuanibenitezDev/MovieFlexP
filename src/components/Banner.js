import React, { useState, useEffect } from "react";
import axios from "../axios";

import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Banner({ fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request.data);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const settings = {
    dots: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    centerMode: false,
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movies) => (
          <div key={movies.id} className="bannerItem">
            <img
              className="bannerImg"
              src={`${baseURL}${movies?.backdrop_path}`}
              alt={movies.name}
            />
            <div className="bannerFade" />
            <div className="bannerContent">
              <div className="bannerText">
                <h1 className="titulo">
                  {movies?.title || movies?.name || movies?.original_title}
                </h1>
                <div className="bannerDescription">
                  {truncate(movies?.overview, 150)}
                </div>
                <Link to={`/Movie/${movies.id}`} key={movies.id}>
                  <button className="bannerButon">Play</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
