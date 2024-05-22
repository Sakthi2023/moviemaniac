import React, { useState, useEffect } from "react";
import Fire from "../../assets/fire.png";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=01dbb14b064ba19063a67ac56363232d";

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetchMethod();
  }, []);

  const fetchMethod = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMovieData(data.results);
  };

  return (
    <section className="movie-list">
      <header className="align-center movie-list-header">
        <h2 className="align-center movie-list-heading">
          Popular <img src={Fire} alt="fire-png" className="navbar-emojis" />
        </h2>
        <div className="align-center movie-list-fs">
          <ul className="align-center movie-filter">
            <li className="movie-filter-item active">8+ Stars</li>
            <li className="movie-filter-item">7+ Stars</li>
            <li className="movie-filter-item">6+ Stars</li>
          </ul>

          <select name="" id="" className="movie-sorting">
            <option value="sortby"> Sortby</option>
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>

          <select name="" id="" className="movie-sorting">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie-cards">
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
