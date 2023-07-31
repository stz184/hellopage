import {Request, Response} from "express";
import fetchHelper from "../../utils/FetchHelper";
import {Weather} from "../../models/WeatherModel";
import {logger} from "../../Logger/CreateLogger";

export type WeatherParams = {
    lat: number;
    lon: number;
};


export default class WeatherService {
    public getWeather(req: Request<WeatherParams>, res: Response) {
        const lat = Math.ceil(req.params.lat * 10000) / 10000;
        const lon = Math.ceil(req.params.lon * 10000) / 10000;
        try {
            Weather.findOne({lat: lat, lon: lon}).then((forecast) => {
                if (forecast && forecast.timestamp + 3600000 > new Date().getTime()) {
                    res.status(200).json(forecast.weather);
                    return;
                } else {
                    const appId = process.env.OPEN_WEATHER_MAP_API_KEY;

                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`;

                    fetchHelper.get(url).then((data) => {
                        let forecast = {
                            lat: lat,
                            lon: lon,
                            timestamp: new Date().getTime(),
                            weather: {
                                main: data.weather[0].main,
                                description: data.weather[0].description,
                                icon: data.weather[0].icon,
                                temp: data.main.temp,
                                feels_like: data.main.feels_like
                            }
                        };

                        Weather.create(forecast).catch((err) => {
                            console.log(err);
                        });

                        res.status(200).json(forecast.weather);
                    }).catch((err) => {
                        res.status(500).json(err);
                    });
                }
            }).catch((err) => {
                logger.error(err);
                res.status(500).json(err);
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}


