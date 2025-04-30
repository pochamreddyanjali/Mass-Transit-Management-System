import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function PathFinder() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const suggestionsRef = useRef();

  const fetchSuggestions = async (query) => {
    if (!query) return setSuggestions([]);
    try {
      const { data } = await axios.get("http://localhost:5000/api/stops", {
        params: { stopName: query },
      });
      setSuggestions(data.slice(0, 5));
    } catch (err) {
      setSuggestions([]);
    }
  };

  const handleInputChange = (setter, value, inputType) => {
    setter(value);
    setActiveInput(inputType);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (value) => {
    if (activeInput === "source") setSource(value);
    else if (activeInput === "destination") setDestination(value);
    setSuggestions([]);
    setActiveInput(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:5000/api/path", {
        params: { source, destination },
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg relative">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          🚍 Ahmedabad Public Transport Path Finder
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-gray-600 font-medium mb-1">
              Source
            </label>
            <input
              type="text"
              value={source}
              onChange={(e) =>
                handleInputChange(setSource, e.target.value, "source")
              }
              onFocus={() => setActiveInput("source")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="e.g. Science City Approach BRTS"
              required
            />
            {activeInput === "source" && suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl shadow-md mt-1 w-full max-h-48 overflow-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-600 font-medium mb-1">
              Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) =>
                handleInputChange(setDestination, e.target.value, "destination")
              }
              onFocus={() => setActiveInput("destination")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="e.g. Thaltej Gam"
              required
            />
            {activeInput === "destination" && suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-xl shadow-md mt-1 w-full max-h-48 overflow-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 shadow-lg transition-all duration-200"
            disabled={loading}
          >
            {loading ? "Finding Path..." : "Find Best Path"}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mt-4 font-semibold">{error}</p>
        )}

        {result && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Best Route:
            </h2>
            <ul className="space-y-2">
              {result.steps.map((step, index) => (
                <li
                  key={index}
                  className="bg-gray-100 border-l-4 border-blue-500 p-3 rounded shadow-sm"
                >
                  <strong>{step.type}</strong> from{" "}
                  <span className="font-medium">{step.from}</span> to{" "}
                  <span className="font-medium">{step.to}</span>
                  {step.line && ` via ${step.line}`}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700 font-medium">
              Total travel time:{" "}
              <span className="text-blue-600 font-bold">
                {result.cost} minutes
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
