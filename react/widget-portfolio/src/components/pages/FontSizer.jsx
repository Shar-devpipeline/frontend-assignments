import React, { useState } from "react";

const FontSizer = () => {
  const [fontSize, setFontSize] = useState(16);

  const growFont = () => {
    if (fontSize < 100) setFontSize(fontSize + 5);
  };

  const shrinkFont = () => {
    if (fontSize > 0) setFontSize(fontSize - 5);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <div className="widget-description">
        <h4>Description</h4>
        <p>Adjusts the size of text dynamically.</p>
        <h4>How to use:</h4>

        <li>
          Use "grow" and "shrink" buttons (or a slider) to increase or decrease
          the font size.
        </li>
        <li>Observe the changes to the sample text.</li>

        <hr />
      </div>
      <h1 style={{ fontSize: `${fontSize}px` }}>Hello Friends</h1>
      <div>
        <button onClick={growFont} style={{ margin: "5px" }}>
          Grow
        </button>
        <button onClick={shrinkFont} style={{ margin: "5px" }}>
          Shrink
        </button>
      </div>
    </div>
  );
};

export default FontSizer;
