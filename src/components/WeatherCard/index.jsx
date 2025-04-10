import "./styles.css";

const WeatherCard = ({
  temperature,
  condition,
  humidity,
  minTemp,
  maxTemp,
}) => {
  return (
    <section className="weather-card">
      <p>Hoje (01/03)</p>
      <img src="./icons-weather/rain.svg" alt="" />
      <h2 className="temperature">{temperature}°</h2>
      <p className="condition">{condition}</p>
      <div className="humidity">
        <div>
          <img src="./humidity.svg" alt="" />
          <p>Humidity: </p>
        </div>
        <span>{humidity}%</span>
      </div>
      <div className="min-max">
        <div>
          <img src="./temp.svg" alt="" />
          <p>Min/Max:</p>
        </div>
        <span>
          {minTemp}/{maxTemp}°
        </span>
      </div>
    </section>
  );
};

export default WeatherCard;
