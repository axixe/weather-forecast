import React, { useState, useEffect, useContext } from 'react';
import './style.sass';

import { SaveDataContext } from '../../context/SaveDataContext';
import { fetchWeather } from '../../service/WeatherAPI/weatherAPI';

export default function WeatherDay() {
    const [ weatherData, setWeatherData ] = useState(null);
    const [ error, setError ] = useState(null);
    const { saveData, toggleSaveData } = useContext(SaveDataContext);

    const fetchWeatherData = async () => {
        try {
            const data = await fetchWeather();
            setWeatherData(data);
        } catch(error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    useEffect(() => {
        if (saveData) {
            fetchWeatherData();
            // toggleSaveData();
        }
    }, [saveData, toggleSaveData]);    
    
    return (
        <section className='weather-day'>
            {weatherData === null || saveData
            ? <span className='loader'></span>
            : weatherData.forecast.forecastday.map((data, index) => (
                index === 0
                ? null
                : <WeatherDayBlock key={index} temp={data.day.avgtemp_c} day={data.date} />
            ))}
        </section>
    )
}

function WeatherDayBlock({ temp, day }) {
    const getDayOfWeek = (dateString) => {
        const date = new Date(dateString);
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[date.getUTCDay()];
    };

    const dayOfWeek = getDayOfWeek(day);

    return (
        <div className='weather-day__block'>
            <div className='weather-day__day-title'>{dayOfWeek}</div>
            <div className='weather-day__temperature'>{temp}°C</div>
        </div>
    )
}