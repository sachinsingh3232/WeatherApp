import { useState } from "react";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"

export const useWeatherData = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecastWeather, setForecastWeather] = useState(null);



	const handleOnSearchChange = (searchData) => {
		const { latitude, longitude } = searchData;

		const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
		const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)

		Promise.all([currentWeatherFetch, forecastWeatherFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();
				console.log(weatherResponse)


				setCurrentWeather(weatherResponse);
				setForecastWeather(forecastResponse);
			})
			.catch((err) => console.log(err));
	}

	return [currentWeather, forecastWeather, handleOnSearchChange]
}