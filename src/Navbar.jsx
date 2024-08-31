import React from "react";
import logo from "/public/images/react.svg";
import { useEffect } from "react";
import { useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  function toggle(e) {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="nav-items">
      <div className="left">
        <img src={logo} alt="react-logo" />
        <h1 className="header1">ReactFacts</h1>
      </div>
      <div className="toggler">
        <input type="checkbox" name="" id="check" onClick={toggle} />
        <label htmlFor="check" className="check-btn"></label>
      </div>
    </div>
  );
};

export default Navbar;
