import React from "react";
import "./Navbar.css";
import Fire from "../../../assets/fire.png";
import Star from "../../../assets/glowing-star.png";
import Party from "../../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movies</h1>
      <div className="allign_center">
        <DarkMode></DarkMode>
        <div className="allign_center navbar_links">
          <a href="">
            Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
          </a>
          <a href="">
            Top Rated{" "}
            <img className="navbar_emoji" src={Star} alt="star emoji" />
          </a>
          <a href="">
            Upcoming{" "}
            <img className="navbar_emoji" src={Party} alt="party emoji" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
