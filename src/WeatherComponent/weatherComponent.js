import React from 'react'
import "./weatherComponent.css"
import WeatherInfoComponent from "../weatherInfoComponent/weatherInfoComponent"

const WeatherComponent = (props) => {
  const { weather, updateWeather } = props;
  const isDay = weather?.weather[0]?.icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}:${new Date(timeStamp * 1000).getMinutes()}`
  }

  const clickHandler = () => {
    updateWeather();
  }
  return (
    <div className='weather'>
      <h1>Weather Report</h1>
      <div className='condition'>
        <span><span id='deg'>{`${Math.floor(weather?.main?.temp - 273)} °C`}</span> | {weather?.weather[0]?.description}</span>
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
          alt=""
        />
      </div>
      <span className='loaction'>{weather?.name} {weather?.sys?.country}</span>
      <div className='weatherInfo'>
        <span>Weather Info</span>
      </div>
      <div className='weatherInfoContainer'>
        <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </div>
      <button onClick={clickHandler}>Back</button>
    </div>
  )
}

export default WeatherComponent