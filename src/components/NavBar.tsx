import React from "react";
import "../styles/navBar.css";
import LOGO from "../assets/logo_summarEase.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src={LOGO} alt="Logo" />
        </a>
      </div>
      <div className="navbar__buttons">
        <button className="btn btn-primary ">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
