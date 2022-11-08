import React from 'react'
import "./weatherInfoComponent.css"
export const weatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    pressure: "/icons/pressure.svg",
    wind: "/icons/wind.svg"
}
const weatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
        <div className='weatherInfoComponent'>
            <img src={weatherInfoIcons[name]} alt="" />
            <div className='info'>
                {value}
                <span>{name}</span>
            </div>
        </div>
    )
}

export default weatherInfoComponent