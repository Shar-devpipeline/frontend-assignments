import React, { useState, useEffect } from "react";

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
      <div className="widget-description">
        <h4>Description</h4>
        <p>Displays current weather information based on a location.</p>
        <h4>How to use:</h4>

        <li>View the weather details like temperature and conditions</li>
      </div>
      <hr />
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
export default WeatherWidget;
