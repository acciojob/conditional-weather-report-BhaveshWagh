import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';  // Correct import

const App = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    // Update weather data with the provided input
    const weatherarr = [
        { temperature: 25, conditions: "Sunny" },
    ];
    setWeather(weatherarr);
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;