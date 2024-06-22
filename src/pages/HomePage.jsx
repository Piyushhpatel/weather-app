import React, { useState, useEffect } from "react";
import GrantAccess from "../components/GrantAccess";
import WeatherInfo from "../components/WeatherInfo";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [locationAccess, setLocationAccess] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const savedLocationAccess = sessionStorage.getItem("locationAccess") === "true";
    const savedCoordinates = JSON.parse(sessionStorage.getItem("coordinates"));

    if (savedLocationAccess && savedCoordinates) {
      setLocationAccess(true);
      setCoordinates(savedCoordinates);
    }
  }, []);

  useEffect(() => {
    if (coordinates.lat && coordinates.lon) {
      fetchData();
    }
  }, [coordinates]);

  async function fetchData() {
    setLoading(true);
    const api_key = process.env.API_KEY; // Assuming you're using create-react-app and .env files
    const uri = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${coordinates.lat},${coordinates.lon}&aqi=no`;
    try {
      const response = await fetch(uri);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error Fetching Data", error);
    } finally {
      setLoading(false);
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }

  function showPosition(position) {
    const locationData = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    setCoordinates(locationData);
    setLocationAccess(true);

    // Save the location data in sessionStorage
    sessionStorage.setItem("locationAccess", "true");
    sessionStorage.setItem("coordinates", JSON.stringify(locationData));
  }

  if (!locationAccess) {
    return <GrantAccess setLocationAccess={setLocationAccess} getLocation={getLocation} />;
  }

  return (
    <div>
      {loading && <Spinner />}
      {!loading && weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default HomePage;
