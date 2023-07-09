import React, { useEffect } from "react";
import useLocation from "../hooks/useLocation";
import fetchHelper from "../utils/FetchHelper";
import "open-weather-icons/dist/css/open-weather-icons.css";
import Tooltip from "./Tooltp";

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

    return (
        <div className="weather-widget">
            <Tooltip text={'Feels like ' + Math.ceil(weather.feels_like) + '°C'} enabled={true}>
                <>
                    <span className="weather-widget__temperature">{Math.ceil(weather.temp)}°C</span>
                    <i className={'owi owi-' + weather.icon}></i>
                </>
            </Tooltip>
        </div>
    );
}

export default WeatherWidget;