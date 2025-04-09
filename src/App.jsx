import React, { useState, useEffect } from "react";
import axios from "axios";
import { Home, Search, Mic, Bell, User } from "lucide-react";
import WeatherCard from "./Components/WeatherCard";
import WeatherCardSkeleton from "./Components/WeathercardSkeleton";
import SearchBar from "./Components/SearchBar";
import Forecast from "./Components/ForeCast";
import ForecastSkeleton from "./Components/ForecastSkeleton";

const API_KEY = import.meta.env.VITE_WEATHER_API;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchWeather = async (city) => {
    setIsLoading(true);
    setError("");

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(
          `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
        ),
        axios.get(
          `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
        ),
      ]);

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
      setLastUpdated(new Date());
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError("City not found. Please check the spelling and try again.");
      } else {
        setError(
          "An error occurred while fetching weather data. Please try again."
        );
      }
      setWeather(null);
      setForecast(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Lahore");

    const refreshInterval = setInterval(() => {
      if (weather) {
        fetchWeather(weather.name);
      }
    }, 30 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1642] to-[#1a1f3d] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Daily Weather</h1>
            {lastUpdated && (
              <p className="text-sm text-gray-400">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>

        <SearchBar onSearch={fetchWeather} isLoading={isLoading} />

        {error && (
          <div className="bg-red-500/80 backdrop-blur-lg text-white p-4 rounded-lg mb-6 animate-fade-in">
            {error}
          </div>
        )}

        {isLoading ? (
          <>
            <WeatherCardSkeleton />
            <ForecastSkeleton />
          </>
        ) : (
          <>
            {weather && <WeatherCard weather={weather} />}
            {forecast && <Forecast forecast={forecast} />}
          </>
        )}

        {/* <div className="fixed bottom-0 left-0 right-0 bg-[#1a1f3d]/90 backdrop-blur-lg p-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button className="text-blue-400 transition-colors hover:text-blue-300">
              <Home className="w-6 h-6" />
            </button>
            <button className="text-gray-400 transition-colors hover:text-gray-300">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-gray-400 transition-colors hover:text-gray-300">
              <Mic className="w-6 h-6" />
            </button>
            <button className="text-gray-400 transition-colors hover:text-gray-300">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-gray-400 transition-colors hover:text-gray-300">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
