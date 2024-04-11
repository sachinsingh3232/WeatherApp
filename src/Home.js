import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { useWeatherData } from './hooks/useWeatherData';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import CurrentWeatherDescription from './components/CurrentWeatherDescription/CurrentWeatherDescription';
import Tabs from './components/UI/Tabs/Tabs';
import { useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header';
import Map from './components/Map';


function Home() {
	const [currentWeather, forecastWeather, handleOnSearchChange] = useWeatherData();
	const [unit, setUnit] = useState('Celsius')
	const location = useLocation();
	const navigate = useNavigate()
	const queryParams = new URLSearchParams(location.search);
	useEffect(() => {
		if (!queryParams.get('lon')) {
			navigate('/')
			return;
		}
		handleOnSearchChange({ latitude: queryParams.get('lat'), longitude: queryParams.get('lon') })
	}, [])


	return (
		<div className="container">
			<Header setUnit={setUnit} />
			{currentWeather &&
				<div style={{ display: 'flex', justifyContent: 'center' }} className='item'>
					<CurrentWeather data={currentWeather} city={queryParams.get('name')} unit={unit} />
					<CurrentWeatherDescription data={currentWeather} unit={unit} />
				</div>}
			{forecastWeather && <Tabs data={forecastWeather} unit={unit} />}
			<Map lat={queryParams.get('lat')} lon={queryParams.get('lon')} />
		</div>
	);
}

export default Home;