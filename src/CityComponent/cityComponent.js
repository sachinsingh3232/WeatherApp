import React from 'react'
import "./cityComponent.css"
const cityComponent = (props) => {
    const { updateCity, fetchData } = props;
    return (
        <div className='city'>
            <h1>Weather App</h1>
            <img
                src="/icons/perfect-day.svg"
                alt=""
            />
            <span>Find Weather of Your City</span>
            <form className='input' onSubmit={fetchData}>
                <input type="text" placeholder='City' onChange={(e) => { updateCity(e.target.value) }} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default cityComponent