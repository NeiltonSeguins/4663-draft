import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/Forecast/ForecastList";
import "./App.css";

const forecasts = [
  { day: "Amanhã", date: "02/12", min: 20, max: 34 },
  { day: "Quarta-feira", date: "03/12", min: 20, max: 34 },
  { day: "Quinta-feira", date: "04/12", min: 20, max: 34 },
]

function App() {
  return (
    <div className="app-container">
      <SearchBar />
      <h1>Florianópolis - SC</h1>
      <WeatherCard
        temperature={33}
        condition="Sol entre nuvens"
        humidity={93}
        minTemp={20}
        maxTemp={34}
      />
      <ForecastList
        forecasts={forecasts}
      />
    </div>
  );
}

export default App;
