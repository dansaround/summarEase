import React from "react";
import "../styles/navBar.css";
import LOGO from "../assets/logo_summarEase.png";

const handleDonation = () => {
  alert("Thank you for your interest, coming soon.");
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src={LOGO} alt="Logo" />
        </a>
      </div>
      <div className="navbar__buttons">
        <button className="btn btn-primary" onClick={handleDonation}>
          Donate
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
