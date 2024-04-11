import React from 'react';
import cl from './Forecast.module.css';

export default function Forecast({ data,unit }) {
	const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const dayInWeek = new Date().getDay();

	const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek));

	return (
		<div className={cl.widgetForecast} style={{ marginTop: '50px' }}>
			{data.list.slice(0, 7).map((item, id) => (
				<div className={cl.widgetItem} key={id}>
					<div className={cl.day}>{forecastDays[id]}</div>
					<div className={cl.icon}>
						<img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="Icon" />
					</div>
					<div className={cl.max}>+{unit === 'Celsius' ? `${Math.round(item.main.temp_max)}°C` : `${Math.round((item.main.temp_max) * 9 / 5) + 32}°F`}</div>
					<div className={cl.min}>+{unit === 'Celsius' ? `${Math.round(item.main.temp_min)}°C` : `${Math.round((item.main.temp_min) * 9 / 5) + 32}°F`}</div>
					<div className={cl.description}>{item.weather[0].description}</div>
				</div>
			))}
		</div>
	)
}
