import { useEffect, useState } from "react";
import Search from "./Search"; // assuming this is your search component

export default function Weather() {
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=42b240cf99e70ebdd1bbcc8321b83849&units=metric`);
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function getCurrentDate() {
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return currentDate;
  }

  function handleSearch() {
    if (search) {
      fetchWeatherData(search);
    }
  }

  useEffect(() => {
    fetchWeatherData('nigeria');
  }, []);

  return (
    <div className="App">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div>Loading...</div>
      ) : weatherData ? (
        <div>
          <div className="city-name">
            <h2>
              {weatherData.name}, <span>{weatherData.sys?.country}</span>
            </h2>
          </div>
          <div className="date">{getCurrentDate()}</div>
          <div className="temp">{weatherData.main?.temp}°C</div>
          <p>{weatherData.weather?.[0]?.description || ''}</p>

          <div className="weather-info">
            <div className="column">
              <p className="wind">{weatherData.wind?.speed} m/s</p>
              <p>Wind Speed</p>
            </div>
            <div className
