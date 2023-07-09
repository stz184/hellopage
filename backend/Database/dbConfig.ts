import mongoose from "mongoose";
import {logger} from "../Logger/CreateLogger";


export default function conn() {
    let uri: string|undefined = process.env.MONGODB_CONNECTION_URI;
    if (uri) {
        mongoose.connect(uri, {
            "authSource": "admin" // users are scoped to DBs
        }).then(() => {
            logger.info("Connected to MongoDB");
        }).catch((err) => {
            logger.error("Error connecting to MongoDB", err);
        });
    } else {
        logger.error("No connection URI");
    }
}




