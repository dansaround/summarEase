import React from "react";
import "../styles/loadingSpinner.css";

type Props = {};

export default function LoadingSpinner({}: Props) {
  return (
    <div className="container loading__spinner__container">
      <div className="loading__spinner">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
