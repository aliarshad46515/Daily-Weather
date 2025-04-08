import React from "react";
import {
  Cloud,
  Droplets,
  Wind,
  Thermometer,
  Sunrise,
  Sunset,
} from "lucide-react";

const WeatherCardSkeleton = () => {
  return (
    <div className="bg-[#1a1f3d]/80 backdrop-blur-lg rounded-3xl p-8 text-white shadow-xl animate-pulse">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-4">
          <div className="w-32 h-32 bg-gray-600/50 rounded-full"></div>
          <div>
            <div className="h-16 w-32 bg-gray-600/50 rounded-lg mb-2"></div>
            <div className="h-6 w-48 bg-gray-600/50 rounded-lg"></div>
          </div>
        </div>
        <div className="h-6 w-48 bg-gray-600/50 rounded-lg mx-auto mt-4"></div>
        <div className="h-4 w-64 bg-gray-600/50 rounded-lg mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {[Thermometer, Wind, Droplets, Cloud, Sunrise, Sunset].map(
          (Icon, index) => (
            <div
              key={index}
              className="flex items-center bg-[#252a4d]/50 rounded-xl p-4"
            >
              <Icon className="w-6 h-6 text-blue-400/50 mr-3" />
              <div className="flex-1">
                <div className="h-4 w-16 bg-gray-600/50 rounded mb-2"></div>
                <div className="h-5 w-12 bg-gray-600/50 rounded"></div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WeatherCardSkeleton;
