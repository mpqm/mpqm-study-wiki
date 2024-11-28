import mongoose from "mongoose"; 
import config from "../configs/validatedEnv";
import Logger from "./logger";

export default async () => {
    try {
        const connection = await mongoose.connect(config.databaseURL) 
        return connection
    } catch (error) { Logger.error("Error connecting to MongoDB", error); }
}
