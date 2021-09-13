import React, { useEffect, useState } from "react";

const baseUrl = "http://api.weatherstack.com/";
const query = "Melbourne";
//This should be in my .env file... but it's fine since I'm never using it again
const apiKey = '51b5d3e588ea5b7cd7db7010efe9b030'
const Weather = () => {
  const [weather, setWeather] = useState("");
  // useEffect(() => {
  //   async function getWeather() {
  //     const data = await fetch(`${baseUrl}current?access_key=${apiKey}&query=${query}`)
  //     const temp = await data.json()
  //     setWeather(temp.current.temperature)
  //   }
  //   getWeather()
  // }, []);
  return (
    <div>
      <p id="troll">
        And since you love weather apps... the weather in Melbourne is
        currently {weather}&deg;C 😊 ...Welp. I tried. I failed. Finding an api that has a free tier that has a
        https endpoint is far to much work just to make a joke. The code is commented out in the github if you happen
        to be interested.. Which I'm sure you will not be given that you've seen so many. 
      </p>
    </div>
  );
};

export default Weather;
