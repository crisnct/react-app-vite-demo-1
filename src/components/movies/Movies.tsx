import React from "react";
import "./Movies.css";
import Navbar from "./Navbar/Navbar";
import MovieList from "./MovieList/MovieList";

const Movies = () => {
  return (
    <div className="movies">
      <Navbar></Navbar>
      <MovieList />
    </div>
  );
};

export default Movies;
