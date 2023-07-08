
import Controller from "../../decorators/RouteDecorotor/controller.docorator"
import { Get } from "../../decorators/RouteDecorotor/handler.controller";
import UserService from "../userServices/userServices"
import { Request, Response } from "express";
import auth from "../../Middleware/auth/User.auth";
import fetchHelper from "../../utils/FetchHelper";

@Controller("/Weather")
class Weather {

    private user;
    constructor(){
      this.user = new UserService(); // User Service Object.
    }

    @Get("/weather/:lat/:lon", []) // Handler.
    getCurrentWeather(req:Request, res:Response){
        const lat = req.params.lat;
        const lon = req.params.lon;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;



    }
    

}


export default Weather;