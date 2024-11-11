import React from "react";
import './style.sass';

import { SaveDataProvider } from '../../context/SaveDataContext';

import Header from "../Header";
import WeatherCard from "../WeatherCard";
import WeatherDay from '../WeatherDay';
import Input from '../Input';

export default function App() {
	return (
		<SaveDataProvider>
			<Header />
			<Input />
			<WeatherCard />
			<WeatherDay />
		</SaveDataProvider>
	)
}