import express from 'express'
import dotenv from 'dotenv';
import ExpressApp from "./ExpressInit/ExpressInit";
import { Server } from "http";
import { logger } from "./Logger/CreateLogger";
import 'reflect-metadata'
import WeatherController from './Controller/controllers/weatherController';
import NewsController from './Controller/controllers/newsController';
dotenv.config({ path: `${process.cwd()}\\.env.${process.env.ENV}` })
import dbConnect from './Database/dbConfig'; // connection is a function which return an object, and in this object call the method to connect the 'db'

dbConnect();

const port: any = process.env.BACKEND_PORT || 4100

const app = new ExpressApp(port, [
    express.json()
],[WeatherController, NewsController]);

const server: Server = app.start()

process.on("SIGTERM", () => {
    server.close((err) => {
        logger.error(`Server is closed ${err}`)
    })
})


