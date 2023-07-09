
import Controller from "../../decorators/RouteDecorotor/controller.docorator"
import { Get } from "../../decorators/RouteDecorotor/handler.controller";
import WeatherService, {WeatherParams} from "../weatherService/weatherService";
import { Request, Response } from "express";



@Controller("/Weather")
class Weather {

    private weather: WeatherService;
    constructor(){
      this.weather = new WeatherService(); // User Service Object.
    }

    @Get("/weather/:lat/:lon", []) // Handler.
    getCurrentWeather(req:Request, res:Response){
        const lat = req.params.lat;
        const lon = req.params.lon;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;



        this.weather.getWeather(req, res);
    }

}


export default Weather;