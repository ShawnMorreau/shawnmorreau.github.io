import React, { useEffect, useState } from "react";

const baseUrl = "https://api.weatherstack.com/";
const query = "Melbourne";
//This should be in my .env file... but it's fine since I'm never using it again
const apiKey = "b57105cc8053bc35407f0bc4a04597f8";
const Weather = () => {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    fetch(`${baseUrl}current?access_key=${apiKey}&query=${query}`)
      .then((res) => res.json())
      .then((data) => setWeather(data.current.temperature));
  }, []);
  return (
    <div>
      <p id="troll">
        And since you love weather apps... the weather in Melbourne is
        currently {weather}&deg;C 😊 
      </p>
    </div>
  );
};

export default Weather;
