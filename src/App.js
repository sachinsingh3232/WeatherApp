import { useState } from 'react';
import Axios from "axios"
import './App.css';
import CityComponent from './CityComponent/cityComponent';
import WeatherComponent from './WeatherComponent/weatherComponent';
const apiKey = "b2031ba8223e6942b7123257bad1862c"
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
    console.log(response.data);
    updateWeather(response.data);
  }
  return (
        <div className="App">
          {weather ?
            (<WeatherComponent weather={weather} updateWeather={updateWeather}/>) :
            (<CityComponent updateCity={updateCity} fetchData={fetchData} />)
          }
        </div>
  );
}

export default App;
