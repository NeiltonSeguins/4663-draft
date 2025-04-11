import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/Forecast/ForecastList";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=${city}`
        );
        const data = await response.json();

        if (data.results) {
          setWeather(data.results);
          setForecast(data.results.forecast.slice(1, 4));
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API", error);
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <div className="app-container">
      <SearchBar onSearch={setCity} />
      {weather && (
        <>
          <h1>{weather.city}</h1>
          <WeatherCard weather={weather} />
          <ForecastList forecasts={forecast} />
        </>
      )}
    </div>
  );
}

export default App;
