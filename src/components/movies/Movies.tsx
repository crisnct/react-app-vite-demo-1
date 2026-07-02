import React from "react";
import "./Movies.css";
import Navbar from "./Navbar/Navbar";
import MovieList from "./MovieList/MovieList";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Movies = () => {
  return (
    <div className="movies">
      <Navbar></Navbar>
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default Movies;
