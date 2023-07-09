import mongoose from "mongoose";

const WeatherSchema = new mongoose.Schema({
    main: String,
    description: String,
    icon: String,
    temp: Number,
    feels_like: Number
});


const Schema= new mongoose.Schema({
    lat: Number,
    lon: Number,
    timestamp: Number,
    weather: WeatherSchema,
});


export interface WeatherInterface extends mongoose.Document {
    lat: number;
    lon: number;
    timestamp: number;
    weather: {
        main: string;
        description: string;
        icon: string;
        temp: number;
        feels_like: number;
    }
}


export const Weather = mongoose.model<WeatherInterface>('weather', Schema);
