import React from 'react';
import cl from './CurrentWeatherDescription.module.css';
import temp from '../../assets/icon/temperature.svg'
import pressure from '../../assets/icon/pressure.svg'
import precipitation from '../../assets/icon/precipitation.svg'
import wind from '../../assets/icon/wind.svg'

export default function CurrentWeatherDescription({ data, unit }) {
	return (
		<div className={cl.currentWidgetDescription}>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src={temp} alt="Temperature" />
				</div>
				<div className={cl.name}>Temperature</div>
				<div className={cl.text}>{unit === 'Celsius' ? `${Math.round(data.main.temp)}°C` : `${Math.round((data.main.temp) * 9 / 5) + 32}°F`} - feels like {unit === 'Celsius' ? `${Math.round(data.main.feels_like)}°C` : `${Math.round((data.main.feels_like) * 9 / 5) + 32}°F`}</div>
			</div>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src={pressure} alt="Pressure" />
				</div>
				<div className={cl.name}>Pressure</div>
				<div className={cl.text}>{data.main.pressure} mm of mercury column</div>
			</div>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src={precipitation} alt="Precipitation" />
				</div>
				<div className={cl.name}>Humidity</div>
				<div className={cl.text}>{data.main.humidity}%</div>
			</div>
			<div className={cl.line}>
				<div className={cl.icon}>
					<img src={wind} alt="Wind" />
				</div>
				<div className={cl.name}>Wind</div>
				<div className={cl.text}>{data.wind.speed} m/s</div>
			</div>
		</div>
	)
}
