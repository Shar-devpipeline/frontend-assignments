import React, { useState } from "react";

export const TextAlignment = () => {
  const [alignText, setAlignText] = useState("left");

  const alignLeft = () => {
    setAlignText("left");
  };
  const alignCenter = () => {
    setAlignText("center");
  };
  const alignRight = () => {
    setAlignText("right");
  };

  return (
    <div
      style={{
        padding: "30px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ textAlign: alignText, fontSize: "35px" }}>Howdy</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={alignLeft} style={{ margin: "5px" }}>
          Left
        </button>
        <button onClick={alignCenter} style={{ margin: "5px" }}>
          Center
        </button>
        <button onClick={alignRight} style={{ margin: "5px" }}>
          Right
        </button>
      </div>
    </div>
  );
};
export default TextAlignment;
