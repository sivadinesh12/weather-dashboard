import React from "react";

const CurrentWeather = ({ weather }) => {
  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.temp}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.wind_speed} m/s</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};

export default CurrentWeather;
