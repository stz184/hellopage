import React, { useEffect } from "react";
import useLocation from "../hooks/useLocation";
import fetchHelper from "../utils/FetchHelper";
import "open-weather-icons/dist/css/open-weather-icons.css";

const WeatherWidget: React.FC = () => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const location = useLocation();
    const [weather, setWeather] = React.useState<any>(null);

    useEffect(() => {
        if (location.locationPermission === 'granted') {
            const url = `${BACKEND_URL}/Weather/get/${location?.location?.latitude}/${location?.location?.longitude}`;
            fetchHelper.get(url).then((response) => {
                setWeather(response);
            });
        }
    }, [location]);

    if (!weather) {
        return null;
    }

    return (<div className="weather-widget"><i className={'owi owi-' + weather.icon}></i></div>);
}

export default WeatherWidget;