import React, { useEffect } from "react";
import useLocation from "../hooks/useLocation";

const WeatherWidget: React.FC = () => {
    const location = useLocation();
    console.log('location', location);


    return (<div className="weather-widget">Weather</div>);
}

export default WeatherWidget;