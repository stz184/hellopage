
import Controller from "../../decorators/RouteDecorotor/controller.docorator"
import { Get } from "../../decorators/RouteDecorotor/handler.controller";
import NewsService from "../services/newsService";
import { Request, Response } from "express";



@Controller("/News")
class News {
    private news: NewsService

    constructor() {
        this.news = new NewsService();
    }

    @Get("/get", []) // Handler.
    getNews(req:Request, res:Response){
        // res.status(200).json({"message": "Hello World!?"});

        this.news.getNews(res);
    }

}


export default News;