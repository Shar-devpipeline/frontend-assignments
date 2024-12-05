import React, { useState } from "react";

const RGBSlider = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const box = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };

  return (
    <div className="rgb-slider-container">
      <div className="rgb-box-container" style={box}></div>
      <p>
        R: {red} - G: {green} - B: {blue}
      </p>
      <div>
        <label>
          R:
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          G:
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          B:
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};
export default RGBSlider;
