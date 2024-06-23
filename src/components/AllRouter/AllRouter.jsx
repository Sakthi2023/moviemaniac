import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import Fire from "../../assets/fire.png";
import Face from "../../assets/partying-face.png";
import Star from "../../assets/star.png";

const AllRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList type="popular" title="Popular" emoji={Fire} />}
      />
      <Route
        path="/upcoming"
        element={<MovieList type="upcoming" title="Latest" emoji={Face} />}
      />
      <Route
        path="/top_rated"
        element={<MovieList type="top_rated" title="Top Rated" emoji={Star} />}
      />
    </Routes>
  );
};

export default AllRouter;
