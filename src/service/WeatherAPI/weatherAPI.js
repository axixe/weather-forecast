const apiKey = '88e6ab4add21476c925170707241111',
      request = `https://api.weatherapi.com/v1`;

const createUrl = (type, query) => `${request}/${type}.json?key=${apiKey}&q=${query}`;

const fetchData = async (type, query) => {
    const response = await fetch(createUrl(type, query)); 

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export const fetchCities = (query) => fetchData('search', query);
export const fetchWeather = () => {
    const city = localStorage.getItem('weather') || '';
    return fetchData('forecast', `${city}&days=6`);
};