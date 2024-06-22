import React, { useState } from "react"
import { IoSearch } from "react-icons/io5";
import Spinner from "../components/Spinner"
import WeatherInfo from "../components/WeatherInfo";
import Error from "../components/ErrorPage";

const SearchPage = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function changeHandler(event){
    setCity(event.target.value);
  }

  async function fetchData(){
    setLoading(true);
    const api_key = process.env.API_KEY;
    const uri = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;

    try{
      const response  = await fetch(uri);
      const data = await response.json();
      setWeatherData(data);
    }
    catch(error){
      console.error("Errror Fetching data");
    }
    finally{
      setLoading(false);
    }
  }

  function submitHandler(event){
    event.preventDefault();
    if(city != ''){
      fetchData();
      setCity("");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-11/12 p-5">
      <form onSubmit={submitHandler} className="flex justify-center items-centers max-w-[500px] w-[190%] h-40px p-4 gap-2">
        <input 
          type="text" 
          placeholder="Search for city" 
          value={city} name="city" 
          onChange={changeHandler}
          className=" appearance-none w-[90%] h-[40px] rounded-lg px-[30px] bg-color-light3 font-mullish text-white font-semibold border-none focus:border-white placeholder:text-white"
        />
        <button className="text-white text-[1.2rem] h-[40px] w-[40px] flex justify-center items-center bg-color-dark2 rounded-full">
          <IoSearch/>
        </button>
      </form>
      {
        loading && <Spinner/>
      }
      {
        weatherData  && <WeatherInfo weatherData={weatherData}/>
      }
    </div>
  )
};

export default SearchPage;
