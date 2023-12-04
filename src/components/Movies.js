import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movies.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState("");
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const API_KEY = "52adeacd0c360c97cfb3694145d2dc13";
  const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const trailerURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    async function fetchData() {
      const movieRequest = await fetch(movieURL);
      const movieData = await movieRequest.json();
      //console.log(movieData);
      setMovies(movieData);

      const trailerRequest = await fetch(trailerURL);
      const trailerData = await trailerRequest.json();
      //console.log(trailerData);
      const trailerVideo = trailerData.results.find(
        (video) => video.type === "Trailer" || video.name === "Trailer"
      );

      if (trailerVideo) {
        setTrailerKey(trailerVideo.key);
      }
      const genreNames = movieData.genres.map((genre) => genre.name);
      setGenres(genreNames);
    }
    fetchData();
  }, [movieURL, trailerURL]);

  const Raiting = Math.floor(movies.vote_average);

  return (
    <div>
      <div className="containerMovie">
        <img
          className="backgroundImg"
          src={`${baseURL}${movies?.backdrop_path}`}
          alt={movies.name}
        />
        <div className="containerPoster">
          <img
            className="posterImg"
            src={`${baseURL}${movies?.poster_path}`}
            alt=""
          ></img>
          <div className="letra">
            <h1 className="tituloPoster">
              {movies?.title || movies?.name || movies?.original_title}
            </h1>
            <div className="descriptionPoster">{movies?.overview}</div>
            <div className="containerGenres">
              <p className="genres">{genres.join(" ")}</p>
            </div>
            <div className="raiting">
              <p className="userScore">User Score {Raiting} </p>
            </div>
          </div>
        </div>
        <div className="containerTrailer">
          <h1 className="trailerTitulo">Trailer</h1>
          {trailerKey && (
            <iframe
              className="trailer"
              title="Trailer"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder="0"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
