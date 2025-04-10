import "../styles.css";

const ForecastItem = ({ day, date, min, max }) => {
  return (
    <div className="forecast-item">
      <p className="forecast-day">
        {day} ({date})
      </p>
      <img src="./icons-weather/cloudly_day.svg" alt="Clima" />
      <p className="forecast-temp">
        {min}/{max}°
      </p>
    </div>
  );
};

export default ForecastItem;
