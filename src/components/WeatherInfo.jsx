import React from "react"
import Codes from "../CountryCode"
import wind from "../assets/wind.png"
import cloud from "../assets/cloud.png"
import humidity from "../assets/humidity.png"

const WeatherInfo = (props) => {
  let WeatherData = props.weatherData;
  let country  = WeatherData.location.country
  let countrycode = Codes[country.toLowerCase()];

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 items-center justify-center">
        <h1 className="font-mulish text-[2rem] text-white">{WeatherData.location.name}</h1>
        <img src={`https://flagsapi.com/${countrycode}/flat/64.png`} className="h-[25px] w-[25px] mt-[10px]" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="capitalize text-white text-[1.5rem] font-semibold">{WeatherData.current.condition.text}</h2>
        <img src={WeatherData.current.condition.icon} className="h-[80px] w-[80px]"/>
      </div>
      <div>
        <h1 className="text-white font-bold text-[2.75rem] text-center">{`${WeatherData.current.temp_c} °C`}</h1>
      </div>
      <div className="flex flex-wrap items-center gap-x-[20px] w-[150%] mt-2">
        <div className="max-w-[300px] w-[30%] p-[1rem] bg-color-light3 rounded-md flex flex-col gap-[5px] items-center">
          <img src={wind} className="h-[90px] w-[90px]"/>
          <p className="text-white font-mullish font-bold uppercase text-[1.15rem]">Windspeed</p>
          <p className="text-white font-mullish font-semibold text-[1.5rem]">{`${WeatherData.current.wind_kph} km/h`}</p>
        </div>

        <div className="max-w-[300px] w-[30%] p-[1rem] bg-color-light3 rounded-md flex flex-col gap-[5px] items-center">
          <img src={humidity} className="h-[90px] w-[90px]"/>
          <p className="text-white font-mullish font-bold uppercase text-[1.15rem]">Humidity</p>
          <p className="text-white font-mullish font-semibold text-[1.5rem]">{`${WeatherData.current.humidity}%`}</p>
        </div>

        <div  className="max-w-[300px] w-[30%] p-[1rem] bg-color-light3 rounded-md flex flex-col gap-[5px] items-center">
          <img src={cloud}  className="h-[90px] w-[90px]"/>
          <p  className="text-white font-mullish font-bold uppercase text-[1.15rem]">Clouds</p>
          <p  className="text-white font-mullish font-semibold text-[1.5rem]">{`${WeatherData.current.cloud}%`}</p>
        </div>

      </div>
    </div>
  )
};

export default WeatherInfo;
