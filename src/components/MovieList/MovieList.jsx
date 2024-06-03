import React, { useState, useEffect } from "react";
import _ from "lodash";
import Fire from "../../assets/fire.png";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = ({ type, title, emoji }) => {
  const API_URL = `https://api.themoviedb.org/3/movie/${type}?api_key=01dbb14b064ba19063a67ac56363232d`;

  const [movieData, setMovieData] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [movierating, setMovieRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMethod();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sorting = _.orderBy(filterMovie, [sort.by], [sort.order]);
      setFilterMovie(sorting);
    }
  }, [sort]);

  const fetchMethod = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMovieData(data.results);
    setFilterMovie(data.results);
  };

  const handlefilter = (rate) => {
    if (rate == movierating) {
      setMovieRating(0);
      setFilterMovie(movieData);
    } else {
      setMovieRating(rate);
      const filtered = movieData.filter(
        (movieData) =>
          movieData.vote_average >= rate && movieData.vote_average < rate + 1
      );
      setFilterMovie(filtered);
    }
  };

  const hanndleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <section className="movie-list" id={type}>
      <header className="align-center movie-list-header">
        <h2 className="align-center movie-list-heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji}-png`} className="navbar-emojis" />
        </h2>
        <div className="align-center movie-list-fs">
          <ul className="align-center movie-filter">
            <li
              className={
                movierating === 8
                  ? "movie-filter-item active"
                  : "movie-filter-item"
              }
              onClick={() => handlefilter(8)}
            >
              8+ Stars
            </li>
            <li
              className={
                movierating === 7
                  ? "movie-filter-item active"
                  : "movie-filter-item"
              }
              onClick={() => handlefilter(7)}
            >
              7+ Stars
            </li>
            <li
              className={
                movierating === 6
                  ? "movie-filter-item active"
                  : "movie-filter-item"
              }
              onClick={() => handlefilter(6)}
            >
              6+ Stars
            </li>
          </ul>

          <select
            name="by"
            id=""
            onChange={hanndleSort}
            className="movie-sorting"
          >
            <option value="default"> Sortby</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            onChange={hanndleSort}
            className="movie-sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie-cards">
        {filterMovie.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
