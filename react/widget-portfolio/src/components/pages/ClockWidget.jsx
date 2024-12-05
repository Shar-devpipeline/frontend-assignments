import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="local-time">
      <h2>Local Time: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

const ClockWidget = () => {
  const [isMounted, setIsMounted] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      {isMounted ? <Clock /> : <h2>Mount</h2>}
      <button onClick={() => setIsMounted((prev) => !prev)}>
        {isMounted ? "Unmount" : "Mount"}
      </button>
    </div>
  );
};

export default ClockWidget;
