import React from "react";
import "../styles/header.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, this is</h5>
        <h1>SummarEase</h1>
        <h5 className="text-light">
          Transforming voice notes into actionable insights
        </h5>
      </div>
    </header>
  );
};

export default Header;
