npx create-react-app weather-app
cd weather-app

npm install axios

// src/App.js
import React, { useState } from 'react';
import CitySelector from './CitySelector';
import WeatherDisplay from './WeatherDisplay';
import axios from 'axios';
import './App.css';

const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Замените на ваш ключ API

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeatherData = async (city) => {
    const cityCoords = {
      'New York': { lat: 40.7128, lon: -74.0060 },
      'London': { lat: 51.5074, lon: -0.1278 },
      'Tokyo': { lat: 35.6895, lon: 139.6917 },
    };

    const { lat, lon } = cityCoords[city];

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`;

    const response = await axios.get(url);
    setWeatherData(response.data);
    setCity(city);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CitySelector fetchWeatherData={fetchWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} city={city} />}
    </div>
  );
}

export default App;

