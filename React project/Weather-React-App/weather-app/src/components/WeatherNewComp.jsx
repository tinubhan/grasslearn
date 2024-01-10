import { useEffect, useState } from "react";
import {Circles} from "react-loader-spinner";

const WeatherNewComp = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  async function getweatherData() {
    try {
      setLoading(true);
      let API_KEY = process.env.REACT_APP_API_KEY;
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );

      let result = await response.json();
      console.log(
        "🚀 ~ file: weatherNewComp.jsx:10 ~ getweatherData ~ result:",
        result
      );
      if (result.cod == "404") {
        setError(result.message);
        console.log("error occured");
      }
      if (result.cod !== "400" && result.cod !== "404") {
        setWeatherData(result);
        setError("");
      }
      console.log("Testing the sound ");
    } catch (error) {
      setError("Error in your site:" + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getweatherData();
  }, [cityName]);
  console.log("City name variable", cityName);
  //   getweatherData();

  function convertToCelcius(temp) {
    let newTemp = temp - 273;
    return Math.floor(newTemp);
  }

  return (
    <>
      <h1>Weather APP:</h1>

      <p>Enter Your city:</p>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      {loading && (
        <Circles
          height="40"
          width="40"
          color="blue"
          ariaLabel="circles-loading"
          wrapperStyle={{display:"flex" , justifyContent:"center"}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && <p style={{ color: "red" }}>Error:{error}</p>}

      {weatherData && (
        <div style={{ padding: "30px" }}>
          <h3>City Name : {weatherData?.name} </h3>
          <h3>Country : {weatherData?.sys?.country}</h3>
          <h3>
            Description :
            {weatherData.weather && weatherData?.weather[0].description}{" "}
          </h3>
          {weatherData.weather && (
            <img
              src={`${weatherData?.weather[0].icon}.svg`}
              alt="img"
              style={{ width: "80px", height: "80px" }}
            />
          )}
          <h3>
            Temperature : {convertToCelcius(weatherData?.main?.temp)} celcius{" "}
          </h3>
        </div>
      )}
    </>
  );
};

export default WeatherNewComp;
