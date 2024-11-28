import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/customError";
import config from "../configs/validatedEnv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user";
import mongoose from "mongoose";
import { Seller } from "../models/seller";

export async function isAutenticatedUser(req: Request, res: Response, next: NextFunction) {
        const { user_token } = req.cookies;
        if (!user_token) { throw new CustomError('로그인이 필요합니다.', 401); }
        const decodedToken = jwt.verify(user_token, config.jwtSecret) as JwtPayload;
        const user = await User.findById(decodedToken.id);
        if (!user) { throw new CustomError('유효하지 않은 사용자입니다.', 401); }
        req.userId = decodedToken.id
        next()
}

export async function isAutenticatedSeller(req: Request, res: Response, next: NextFunction) {
        const { seller_token } = req.cookies;
        if (!seller_token) { throw new CustomError('로그인이 필요합니다.', 401); }
        const decodedToken = jwt.verify(seller_token, config.jwtSecret) as JwtPayload;
        const seller = await Seller.findById(decodedToken.id);
        if (!seller) { throw new CustomError('유효하지 않은 사용자입니다.', 401); }
        req.userId = decodedToken.id
        next()
}