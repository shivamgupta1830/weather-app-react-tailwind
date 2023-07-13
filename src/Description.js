import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilStopwatch,
  UilTemperature,
  UilTear,
  UilWind,
} from "@iconscout/react-unicons";

function Description(props) {
  const { weather, units } = props;
  const { feels_like, temp_min, temp_max, pressure, humidity, speed } = {
    ...weather,
  };

  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "mi/h";

  const cards = [
    {
      id: 1,
      icon: <UilTemperature size={18} />,
      title: "Real feel:",
      data: Math.round(feels_like),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <UilArrowUp size={18} />,
      title: "Min:",
      data: Math.round(temp_max),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <UilArrowDown size={18} />,
      title: "Max:",
      data: Math.round(temp_min),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <UilStopwatch size={18} />,
      title: "Pressure:",
      data: Math.round(pressure),
      unit: "hPa",
    },
    {
      id: 5,
      icon: <UilTear size={18} />,
      title: "Humidity:",
      data: Math.round(humidity),
      unit: "%",
    },
    {
      id: 6,
      icon: <UilWind size={18} />,
      title: "Wind speed:",
      data: Math.round(speed),
      unit: windUnit,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      {cards.map(({ id, icon, title, data, unit }) => {
        return (
          <div
            key={id}
            className=" text-white flex flex-col justify-between font-light text-sm items-center  border-dotted border border-sky-400 p-5   shadow-lg  shadow-blue-900  rounded-md"
          >
            <div className="flex justify-center items-center ">
              <span className="mr-1">{icon}</span>

              <span className="text-md font-normal"> {title}</span>
            </div>
            <div>
              <span className="font-bold  text-lg mt-2">
                {data} {unit}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Description;
