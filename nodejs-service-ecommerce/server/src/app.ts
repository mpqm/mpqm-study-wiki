import express from "express"
import "dotenv/config";
import config from "./configs/validatedEnv";
import logger from './loaders/logger';
import morgan from "morgan";

async function startServer() {
    const app = express();
    await require('./loaders').default({ expressApp: app });
    app.listen(config.port, () => { logger.info(`Server listening on http://localhost:${config.port}`);})
        .on('error', err => {logger.error(err);process.exit(1);});
}
startServer()