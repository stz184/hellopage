const getCurrentWeather = async (city: string) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
    );
    return response.json();
}