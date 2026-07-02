import React from "react";
import { Route, Routes } from "react-router-dom";

import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import MovieList from "./MovieList/MovieList";
import NotFound from "./NotFound";

const AllRouting = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MovieList type="popular" title="Popular" emoji={Fire} />}
      />
      <Route
        path="/popular"
        element={<MovieList type="popular" title="Popular" emoji={Fire} />}
      />
      <Route
        path="/top-rated"
        element={<MovieList type="top_rated" title="Top Rated" emoji={Star} />}
      />
      <Route
        path="/upcoming"
        element={<MovieList type="upcoming" title="Upcoming" emoji={Party} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRouting;
