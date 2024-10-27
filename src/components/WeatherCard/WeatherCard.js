import React, { useEffect, useState, useContext } from "react";

import { SaveDataContext } from '../../context/SaveDataContext';

import { fetchWeather } from '../../service/WeatherAPI/weatherAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faDroplet } from "@fortawesome/free-solid-svg-icons";

import './style.sass';

export default function WeatherCard() {
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
            toggleSaveData();
        }
    }, [saveData, toggleSaveData]);

    return (
        <section className='weather-card'>
            {weatherData === null || saveData
            ? <span className='loader'></span>
            : <>
                <div className='weather-card__info'>
                    <h3 className='weather-card__city'>{weatherData.location.name}</h3>
                    <p className='weather-card__status'>Current weather</p>
                    <p className='weather-card__additional-param'>
                        <FontAwesomeIcon icon={faWind} size='lg' style={{color: "#ffffff"}} />
                        <span className="weather-card__wind">Wind: {weatherData.current.wind_kph} km/h</span>
                    </p>
                </div>
                
                <div className='weather-card__details'>
                    <h2 className='weather-card__temperature'>{weatherData.current.temp_c}°C</h2>
                    <p className='weather-card__status'>{weatherData.current.condition.text}</p>
                    <p className='weather-card__additional-param'>
                        <FontAwesomeIcon icon={faDroplet} size='lg' style={{color: "#ffffff"}} />
                        <span className="weather-card__humidity">Humidity: {weatherData.current.humidity}%</span>
                    </p>
                </div>
            </>
            }
        </section>
    )
}