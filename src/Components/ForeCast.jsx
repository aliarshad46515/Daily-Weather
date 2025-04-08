import React from "react";

const Forecast = ({ forecast }) => {
  const groupedForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (!acc[date] || new Date(item.dt * 1000).getHours() === 12) {
      acc[date] = item;
    }
    return acc;
  }, {});

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(groupedForecast)
          .slice(0, 5)
          .map(([date, item]) => (
            <div
              key={item.dt}
              className="bg-[#252a4d]/80 backdrop-blur-lg rounded-xl p-4 text-center text-white transition-transform hover:transform hover:scale-105 cursor-pointer"
            >
              <p className="text-gray-400 mb-2">{date}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="w-16 h-16 mx-auto"
              />
              <p className="text-2xl font-semibold mb-1">
                {Math.round(item.main.temp)}°
              </p>
              <p className="text-sm text-gray-400 capitalize">
                {item.weather[0].description}
              </p>
              <div className="mt-2 text-sm">
                <p className="text-blue-400">
                  H: {Math.round(item.main.temp_max)}°
                </p>
                <p className="text-gray-400">
                  L: {Math.round(item.main.temp_min)}°
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Forecast;
