// src/WeatherDisplay.js
import React from 'react';
import WeatherDetails from './WeatherDetails';

function WeatherDisplay({ weatherData, city }) {
  const currentWeather = weatherData.current;
  const dailyWeather = weatherData.daily.slice(0, 5);

  return (
    <div className="weather-display">
      <h2>Weather in {city}</h2>
      <div className="current-weather">
        <h3>Current Weather</h3>
        <p>Temperature: {currentWeather.temp}°C</p>
        <p>Weather: {currentWeather.weather[0].description}</p>
      </div>
      <h3>5-Day Forecast</h3>
      <div className="daily-weather">
        {dailyWeather.map((day, index) => (
          <WeatherDetails key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
