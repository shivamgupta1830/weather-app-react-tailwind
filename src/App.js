import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { getFormattedWeatherData } from "./services/WeatherService";
// import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { iconUrlFromCode } from "./services/WeatherService";
import Description from "./Description";
import Citybuttons from "./Citybuttons";
import Errorpage from "./Errorpage";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("delhi");
  const [error, setError] = useState("");

  const { temp, description, icon, name, country } = {
    ...weather,
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units).catch((err) => {
        setError(err.message);
      });
      // console.log(data);

      setWeather(data);
    };

    fetchWeatherData();
  }, [units, city, error]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div
      className="mx-auto max-w-screen-mdcd  min-h-screen
      p-5 px-32 bg-gradient-to-b from-cyan-500 to-blue-700  shadow-xl  shadow-gray-500 border-dotted border border-sky-400 rounded-md"
    >
      <Citybuttons setCity={setCity} />

      <div className="flex justify-between shadow-lg   shadow-blue-900  border-dotted border border-sky-400 p-3 mt-3 rounded-md">
        <div className="flex flex-row w-3/4 items-center space-x-4 justify-start">
          <input
            name="city"
            onKeyDown={enterKeyPressed}
            type="text"
            placeholder="Type city & press enter..."
            className="text-lg font-light p-2 w-3/4 shadow-lg  focus:outline-none  rounded-md"
          />
          {/* <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-in-out hover:scale-125"
          />
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-in-out hover:scale-125"
          /> */}
        </div>
        <button
          onClick={(e) => handleUnitsClick(e)}
          className="text-white text-xl font-semibold cursor-pointer transition ease-in-out hover:scale-125  shadow-lg   shadow-blue-900  border-dotted border border-sky-400 py-2 px-3 rounded-md"
        >
          °F
        </button>
      </div>
      {weather ? (
        <div>
          <div className=" flex justify-between border-dotted border border-sky-400   shadow-lg   shadow-blue-900 mt-10 p-5 rounded-md">
            <div className="flex flex-col justify-center items-center mx-5">
              <p className=" text-3xl font-semibold text-cyan-300 capitalize items-center">
                {description}
              </p>
              <img src={iconUrlFromCode(icon)} alt="" className="w-[72px]" />
              <p className="text-white text-lg font-medium">
                {name}, {country}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center mx-5">
              <p className=" text-white text-5xl font-semibold ">
                {Math.round(temp)} °{units === "metric" ? "C" : "F"}
              </p>
            </div>
          </div>
          <Description weather={weather} units={units} />
        </div>
      ) : (
        <Errorpage />
      )}
    </div>
  );
}

export default App;
