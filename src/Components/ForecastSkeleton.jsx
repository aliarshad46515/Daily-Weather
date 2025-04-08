import React from "react";

const ForecastSkeleton = () => {
  return (
    <div className="mt-8 animate-pulse">
      <div className="h-8 w-48 bg-gray-600/50 rounded-lg mb-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="bg-[#252a4d]/80 backdrop-blur-lg rounded-xl p-4 text-center"
          >
            <div className="h-4 w-24 bg-gray-600/50 rounded-lg mx-auto mb-4"></div>
            <div className="w-16 h-16 bg-gray-600/50 rounded-full mx-auto mb-4"></div>
            <div className="h-8 w-16 bg-gray-600/50 rounded-lg mx-auto mb-2"></div>
            <div className="h-4 w-32 bg-gray-600/50 rounded-lg mx-auto mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-gray-600/50 rounded-lg mx-auto"></div>
              <div className="h-4 w-20 bg-gray-600/50 rounded-lg mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSkeleton;
