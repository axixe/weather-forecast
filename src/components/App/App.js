import React from "react";
import './style.sass';

import { SaveDataProvider } from '../../context/SaveDataContext';

import Header from "../Header";
import WeatherCard from "../WeatherCard";
import WeatherDay from '../WeatherDay';
import Input from '../Input';

export default function App() {
	const token = 'c5ae7fcb86c8427ba1d91415242710',
		  city = 'Zelenogorsk/Krasnoyarsk/Russia';

	fetch(`http://api.weatherapi.com/v1/forecast.json?key=${token}&q=${city}&days=6`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			return response.json();
		})
		.then(data => {
			console.log(data);
		})

	return (
		<SaveDataProvider>
			<Header />
			<Input />
			<WeatherCard />
			<WeatherDay />
		</SaveDataProvider>
	)
}