import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler } from 'express';
import Logger from '../loaders/logger';
import CustomError from '../utils/customError';

// 상수로 정의된 에러 메시지
const ERROR_MESSAGES = {
    NotFound: 'Endpoint not found',
    InternalServerError: 'Internal server Error',
    InvalidResource: 'Resource not found with this id',
    DuplicateKey: 'Duplicate key entered',
    InvalidURL: 'Your URL is invalid. Please try again later',
    ExpiredURL: 'Your URL has expired. Please try again later!',
};

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
    next(new CustomError(ERROR_MESSAGES.NotFound, 404));
};

export function asyncErrorHandler(fn: Function) {
    return function (req: Request, res: Response, next: NextFunction) {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
};

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    let statusCode = err.statusCode || 500;
    let errorMessage = err.message || ERROR_MESSAGES.InternalServerError;

    // if (isHttpError(err)) {
    //     statusCode = err.status;
    //     errorMessage = err.message;
    // }
    // Custom error handling
    switch (err.name) {
        case "CastError":
            errorMessage = `${ERROR_MESSAGES.InvalidResource}. Invalid ${err.path}`;
            statusCode = 400;
            break;
        case 11000:
            errorMessage = `${ERROR_MESSAGES.DuplicateKey} entered`;
            statusCode = 400;
            break;
        case "JsonWebTokenError":
            errorMessage = ERROR_MESSAGES.InvalidURL;
            statusCode = 400;
            break;
        case "TokenExpiredError":
            errorMessage = ERROR_MESSAGES.ExpiredURL;
            statusCode = 400;
            break;
        default:
            break;
    }

    Logger.error(`${statusCode} ${errorMessage}`);
    res.status(statusCode).json({ success: false, message: errorMessage });
};
