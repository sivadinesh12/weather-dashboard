import React from "react";

const Forecast = ({ forecast }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      {forecast.map((day, index) => (
        <div key={index}>
          <p>Date: {day.date}</p>
          <p>Condition: {day.condition}</p>
          <p>High: {day.high}°C</p>
          <p>Low: {day.low}°C</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
