const getFormattedWeatherData = async (city, units = "metric") => {
  const api_key = "ee404f5234e6a5503ed4a68e83b774cd";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=${units}`;

  const data = await fetch(`${url}`)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
    dt,
    timezone,
    cod,
  } = data;
  const { description, icon } = weather[0];

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    description,
    icon,
    name,
    dt,
    timezone,
    cod,
  };
};

const iconUrlFromCode = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}.png`;
};

export { getFormattedWeatherData, iconUrlFromCode };
