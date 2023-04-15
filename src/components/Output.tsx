import React, { FC } from "react";
import "../styles/output.css";

const Output: FC<{ response: string }> = ({ response }) => {
  return (
    <div className="container output__container">
      {!response ? (
        "Esperando Resumen"
      ) : (
        <div dangerouslySetInnerHTML={{ __html: String(response) }} />
      )}
    </div>
  );
};

export default Output;
