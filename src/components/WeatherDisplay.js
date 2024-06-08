import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTemperatureHigh, 
  faTemperatureLow, 
  faThermometerHalf, 
  faTachometerAlt, 
  faEye, 
  faTint, 
  faWind, 
  faCloud, 
  faCompass 
} from '@fortawesome/free-solid-svg-icons';


const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No data to display</p>;
  }

  const { name, main, weather, visibility, wind, sys } = weatherData;

  return (
    <div className="WeatherDisplay">
    <h2>{name}, {sys.country}</h2>
    
    <div className="temperature">
      <p><FontAwesomeIcon icon={faThermometerHalf} /> <span>Temperature:</span> {main.temp}°C</p>
      <div className="temperature-details">
        <p><FontAwesomeIcon icon={faTemperatureHigh} /> <span>Feels like:</span> {main.feels_like}°C</p>
        <p><FontAwesomeIcon icon={faTemperatureLow} /> <span>Temp min:</span> {main.temp_min}°C</p>
        <p><FontAwesomeIcon icon={faTemperatureHigh} /> <span>Temp max:</span> {main.temp_max}°C</p>
      </div>
    </div>
    
    <div className="weather-metrics">
      <p><FontAwesomeIcon icon={faTachometerAlt} /> <span>Pressure:</span> {main.pressure} hPa</p>
      <p><FontAwesomeIcon icon={faEye} /> <span>Visibility:</span> {visibility / 1000} km</p>
      <p><FontAwesomeIcon icon={faTint} /> <span>Humidity:</span> {main.humidity}%</p>
    </div>
    
    <div className="weather-overview">
      <p><FontAwesomeIcon icon={faCloud} /> <span>Weather:</span> {weather[0].main}</p>
      <p><FontAwesomeIcon icon={faCloud} /> <span>Description:</span> {weather[0].description}</p>
    </div>

    <div className="wind-metrics">
      <p><FontAwesomeIcon icon={faWind} /> <span>Wind Speed:</span> {wind.speed} m/s</p>
      <p><FontAwesomeIcon icon={faCompass} /> <span>Wind Direction:</span> {wind.deg}°</p>
    </div>
  </div>  );
};

export default WeatherDisplay;
