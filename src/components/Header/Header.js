import React from "react";
import './style.sass';

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>Weather Forecast</h1>
            <p className='header__subtitle'>Stay informed about the weather conditions</p>
        </header>
    )
}