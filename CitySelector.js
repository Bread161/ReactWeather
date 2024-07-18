// src/CitySelector.js
import React, { useState } from 'react';

const cities = ['New York', 'London', 'Tokyo'];

function CitySelector({ fetchWeatherData }) {
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedCity) {
      fetchWeatherData(selectedCity);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedCity} onChange={handleChange}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default CitySelector;
