import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const API_KEY = '5adb19fcccc86d95225daba3a65cddb6';

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError('');  // Clear any previous errors
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('City not found. Please check your spelling or try again.');
      setWeatherData(null);  // Clear any previous weather data
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm onSearch={fetchWeather} />
      {error && <div className="error">{error}</div>}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default WeatherApp;
