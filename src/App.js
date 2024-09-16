import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forcast";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async (city) => {
    try {
      const apiKey = "3b49b3b22e37adc031ed5d0d315ddd57";
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      setWeather({
        temp: weatherResponse.data.main.temp,
        humidity: weatherResponse.data.main.humidity,
        wind_speed: weatherResponse.data.wind.speed,
        condition: weatherResponse.data.weather[0].description,
      });

      const forecastData = forecastResponse.data.list.filter((reading) =>
        reading.dt_txt.includes("18:00:00")
      );
      setForecast(
        forecastData.map((reading) => ({
          date: reading.dt_txt,
          condition: reading.weather[0].description,
          high: reading.main.temp_max,
          low: reading.main.temp_min,
        }))
      );
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {weather && <CurrentWeather weather={weather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
};

export default App;
