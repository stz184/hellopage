
import Controller from "../../decorators/RouteDecorotor/controller.docorator"
import { Get } from "../../decorators/RouteDecorotor/handler.controller";
import WeatherService, {WeatherParams} from "../services/weatherService";
import { Request, Response } from "express";



@Controller("/Weather")
class Weather {

    private weather: WeatherService;

    constructor(){
        this.weather = new WeatherService();
    }

    @Get("/get/:lat/:lon", []) // Handler.
    getCurrentWeather(req:Request<WeatherParams>, res:Response){
        this.weather.getWeather(req, res);
    }

}


export default Weather;