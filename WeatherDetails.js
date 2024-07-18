// src/WeatherDetails.js
import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ day }) {
  const date = new Date(day.dt * 1000).toLocaleDateString();
  return (
    <div className="weather-details">
      <p>Date: {date}</p>
      <p>Temperature: {day.temp.day}°C</p>
      <p>Weather: {day.weather[0].description}</p>
    </div>
  );
}

export default WeatherDetails;
