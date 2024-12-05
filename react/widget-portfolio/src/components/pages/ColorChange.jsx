import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("");
  const [input, setInput] = useState("");

  const handleUpdate = () => {
    setColor(input);
    setInput("");
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          border: "1px solid white",
          borderRadius: "10px",
        }}
      >
        <h2>What color would you like the text to be?</h2>
        <h1 style={{ color: color }}>{color || "Color Changer"}</h1>
        <input
          type="text"
          placeholder="Enter a color"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "5px", fontSize: "16px" }}
        />
        <button
          onClick={handleUpdate}
          style={{ marginLeft: "10px", padding: "5px 10px" }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default ColorChanger;
