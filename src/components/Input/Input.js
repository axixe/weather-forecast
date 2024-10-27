import React, { useContext, useState } from 'react';
import './style.sass';

import { SaveDataContext } from '../../context/SaveDataContext';

import { fetchCities } from '../../service/WeatherAPI/weatherAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Input() {
    const [ inputValue, setInputValue ] = useState(null);
    const [ cities, setCities ] = useState([]);
    const { saveData, toggleSaveData } = useContext(SaveDataContext);

    const handleChange = async (e) => {
        const { value } = e.target;
        setInputValue(value);
        
        if (value.length >= 3) {
            try {
                const data = await fetchCities(value);
                setCities(data);
            } catch(error) {
                console.error(error);
                setCities([]);
            }
        } else {
            setCities([]);
        }
    }

    const handleCitySelect = (city) => {
        const result = `${city.name}, ${city.region}, ${city.country}`;

        setInputValue(result);
        localStorage.setItem('weather', result)
        setCities([]);

        if (saveData !== true) {
            toggleSaveData();
        }
    }

    return (
        <div className='input-wrapper'>
            <input type='text' placeholder=' ' value={inputValue} className='input-wrapper__element' id='input' onChange={handleChange} />
            <label htmlFor='input' className='input-wrapper__label'>YOUR CITY</label>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='input-wrapper__icon' />
            {cities.length > 0 && <CitiesList citiesArr={cities} citySelect={handleCitySelect} />}
        </div>
    )
}

function CitiesList({ citiesArr, citySelect }) {
    return (
        <ul className='autocomplete-list'>
            {citiesArr.map(city => (
                <li key={city.id} onClick={() => citySelect(city)} className='autocomplete-list__item'>
                    {city.name}, {city.region}, {city.country}
                </li>
            ))}
        </ul>
    )
}