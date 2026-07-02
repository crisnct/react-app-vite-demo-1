import React from "react";

import "./DarkMode.css";
import SunIcon from "../../../assets/Sun.svg";
import MoonIcon from "../../../assets/Moon.svg";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };
  if (localStorage.getItem("theme") === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={localStorage.getItem("theme") === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={SunIcon} alt="" className="dark_mode_icon sun" />
        <img src={MoonIcon} alt="" className="dark_mode_icon moon" />
      </label>
    </div>
  );
};

export default DarkMode;
