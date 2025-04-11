import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/Forecast/ForecastList";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.hgbrasil.com/weather?format=json-cors&key=${API_KEY}&city_name=São Luís,MA`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setWeatherData(data.results);
        } else {
          console.error("Erro na resposta da API:", data);
        }
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }, []);

  return (
    <div className="app-container">
      <SearchBar />
      {weatherData && (
        <>
          <h1>{weatherData.city}</h1>
          <WeatherCard
            temperature={weatherData.temp}
            condition={weatherData.description}
            humidity={weatherData.humidity}
            minTemp={weatherData.forecast[0].min}
            maxTemp={weatherData.forecast[0].max}
          />
          <ForecastList forecasts={weatherData.forecast.slice(1, 4)} />
        </>
      )}
    </div>
  );
}

export default App;
