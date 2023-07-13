import React from "react";

function Citybuttons({ setCity }) {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Paris",
    },
    {
      id: 4,
      title: "Moscow",
    },
    {
      id: 5,
      title: "Dubai",
    },
  ];
  return (
    <div className="flex items-center justify-around my-3">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            className="text-white text-lg  font-semibold"
            onClick={() => setCity(city.title)}
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default Citybuttons;
