import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() && !isLoading) {
      onSearch(city);
    }
  };

  const handleClear = () => {
    setCity("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "/" && !isFocused) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFocused]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto mb-8"
    >
      <input
        ref={inputRef}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search for a city... (Press '/' to focus)"
        className="w-full px-6 py-3 bg-[#252a4d]/80 backdrop-blur-lg text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 pl-12 pr-12 transition-all duration-300"
        disabled={isLoading}
      />
      <Search
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
          isLoading ? "text-gray-500" : "text-gray-400"
        } w-5 h-5`}
      />

      {city && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {isLoading && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
