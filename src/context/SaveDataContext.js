import React, { useState, createContext } from 'react';

const SaveDataContext = createContext();

function SaveDataProvider({ children }) {
    const [ saveData, setSaveData ] = useState(false);

    const toggleSaveData = () => {
        setSaveData((prevData) => prevData === false ? true : false);
    };

    return (
        <SaveDataContext.Provider value={{ saveData, toggleSaveData }}>
            {children}
        </SaveDataContext.Provider>
    )
}

export { SaveDataContext, SaveDataProvider };