import express, { Application, Request, Response, NextFunction } from 'express';
import config from '../configs/validatedEnv';
import cors from 'cors';
import logger from './logger';
import morgan from "morgan";
import { errorHandler, notFoundHandler } from '../middlewares/error';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from '../routes/user';
import sellerRouter from '../routes/seller';
export default ({ app }: { app: Application }) => {
    // 로깅
    const stream = { write: (message: string) => { logger.info(message.trim()); }, };
    app.use(morgan(":method :status :url :response-time ms", { stream: stream }));

    // 
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({origin: 'http://localhost:3000', credentials: true}));
    app.use("/", express.static("uploads"))
    app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

    // 라우팅
    app.use("/test", (req, res) => {res.send("test")});
    app.use('/user', userRouter)
    app.use('/seller', sellerRouter)

    // 에러 핸들러
    app.use(notFoundHandler)
    app.use(errorHandler);
};
