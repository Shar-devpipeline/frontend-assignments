import React, { useState, useEffect } from "react";

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
      <h1 style={{ textAlign: alignText, fontSize: "15px" }}>Howdy</h1>
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
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
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

const ColorChanger = () => {
  const [color, setColor] = useState("");
  const [input, setInput] = useState("");

  const handleUpdate = () => {
    setColor(input);
    setInput("");
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
  );
};

const RGBSlider = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const box = {
    width: "200px",
    height: "100px",
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    marginLeft: "20%",
    border: "1px solid black",
    borderRadius: "5px",
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingBottom: "30px",
        paddingTop: "30px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <div style={box}></div>
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

const WeatherWidget = () => {
  const latitude = 39.62973;
  const longitude = -111.439217;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.weather.gov/points/${latitude},${longitude}`
      );

      const data = await response.json();
      const forecastUrl = data.properties.forecast;
      const cityName = data.properties.relativeLocation.properties.city;
      const stateName = data.properties.relativeLocation.properties.state;

      setCity(`${cityName}, ${stateName}`);

      const forecastResponse = await fetch(forecastUrl);
      if (!forecastResponse.ok) {
        throw new Error("Error fetching weather data");
      }

      const forecastData = await forecastResponse.json();
      setWeather(forecastData.properties.periods[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        paddingBottom: "30px",
        paddingTop: "30px",
        border: "1px solid white",
        borderRadius: "10px",
      }}
    >
      <h2>Weather Widget</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weather ? (
        <div>
          <h3>{city}</h3>
          <p>
            Temperature: {weather.temperature}°{weather.temperatureUnit}
          </p>
          <p>Condition: {weather.shortForecast}</p>
        </div>
      ) : null}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FontSizer />
      <TextAlignment />
      <ClockWidget />
      <ColorChanger />
      <RGBSlider />
      <WeatherWidget />
    </div>
  );
};

export default App;
