import React, { FC } from "react";
import "../styles/output.css";

type OutputProps = {
  response: string;
  resetOutput: () => void;
};

const Output: FC<OutputProps> = ({ response, resetOutput }) => {
  return (
    <>
      <div className="output__container">
        {!response ? (
          "Esperando Resumen"
        ) : (
          <div dangerouslySetInnerHTML={{ __html: String(response) }} />
        )}
      </div>
      <button className="btn btn__reset" onClick={resetOutput}>
        Make another summary
      </button>
    </>
  );
};

export default Output;
