import "./Movies.css";

import Navbar from "./Navbar/Navbar";
import AllRouting from "./AllRouting";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

const Movies = () => {
  return (
    <MemoryRouter>
      <div className="movies">
        <Navbar></Navbar>
        <AllRouting></AllRouting>
      </div>
    </MemoryRouter>
  );
};

export default Movies;
