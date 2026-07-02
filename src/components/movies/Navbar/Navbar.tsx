import "./Navbar.css";
import Fire from "../../../assets/fire.png";
import Star from "../../../assets/glowing-star.png";
import Party from "../../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movies</h1>
      <div className="allign_center">
        <DarkMode></DarkMode>
        <div className="allign_center navbar_links">
          <NavLink to="/popular">
            Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
          </NavLink>
          <NavLink to="/top-rated">
            Top Rated{" "}
            <img className="navbar_emoji" src={Star} alt="star emoji" />
          </NavLink>
          <NavLink to="/upcoming">
            Upcoming{" "}
            <img className="navbar_emoji" src={Party} alt="party emoji" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
