import React from 'react';
import cl from './CurrentWeather.module.css';

export default function CurrentWeather({ data, city ,unit}) {
	// console.log(data)
	return (
		<div className={cl.currentWidget}>
			<div className={cl.wrapperTop}>
				<div className={cl.infoLeft}>
					<div className={cl.temp}>{unit === 'Celsius' ? `${Math.round(data.main.temp)}°C` : `${Math.round((data.main.temp) * 9 / 5) + 32}°F`}</div>
					<div className={cl.day}>Today</div>
				</div>
				<div className={cl.infoRight}>
					<img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Image" />
				</div>
			</div>
			<div className={cl.wrapperBottom}>
				<div className={cl.city}>City: {city}</div>
			</div>
		</div>
	)
}
//https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png