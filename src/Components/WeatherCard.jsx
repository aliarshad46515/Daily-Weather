import React from "react";
import {
  Cloud,
  Droplets,
  Wind,
  Thermometer,
  Sunrise,
  Sunset,
} from "lucide-react";

const WeatherCard = ({ weather }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-[#1a1f3d]/80 backdrop-blur-lg rounded-3xl p-8 text-white shadow-xl">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-4">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
            className="w-32 h-32"
          />
          <div>
            <h2 className="text-7xl font-bold">
              {Math.round(weather.main.temp)}°
            </h2>
            <p className="text-2xl text-gray-300 capitalize">
              {weather.weather[0].description}
            </p>
          </div>
        </div>
        <p className="text-xl mt-2">
          {weather.name}, {weather.sys.country}
        </p>
        <p className="text-sm text-gray-400">
          {new Date(weather.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div className="flex items-center bg-[#252a4d]/50 rounded-xl p-4">
          <Thermometer className="w-6 h-6 text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Feels Like</p>
            <p className="font-semibold">
              {Math.round(weather.main.feels_like)}°
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#252a4d]/50 rounded-xl p-4">
          <Wind className="w-6 h-6 text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Wind Speed</p>
            <p className="font-semibold">
              {Math.round(weather.wind.speed)} km/h
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#252a4d]/50 rounded-xl p-4">
          <Droplets className="w-6 h-6 text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Humidity</p>
            <p className="font-semibold">{weather.main.humidity}%</p>
          </div>
        </div>

        <div className="flex items-center bg-[#252a4d]/50 rounded-xl p-4">
          <Cloud className="w-6 h-6 text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Pressure</p>
            <p className="font-semibold">{weather.main.pressure} hPa</p>
          </div>
        </div>

        <div className="flex items-center bg-[#252a4d]/50 rounded-xl p-4">
          <Sunrise className="w-6 h-6 text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Sunrise</p>
            <p className="font-semibold">{formatTime(weather.sys.sunrise)}</p>
          </div>
        </div>

        <div className="flex items-center bg-[#252a4d]/50 rounded-xl p-4">
          <Sunset className="w-6 h-6 text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Sunset</p>
            <p className="font-semibold">{formatTime(weather.sys.sunset)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
