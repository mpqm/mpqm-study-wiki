import { NextFunction, Request, Response } from "express";
import { UserLoginDTO, UserActivationDTO, UserSignupDTO } from "../dto/user";
import * as userService from "../services/user";
import { cookieOption } from "../utils/jwtToken";
import CustomError from "../utils/customError";

export async function userSignup(req: Request, res: Response, next: NextFunction) {
    try {
        const userSignupDTO: UserSignupDTO = req.body;
        const result = await userService.userSignup(userSignupDTO);
        res.status(201).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function userActivation(req: Request, res: Response, next: NextFunction) {
    try {
        const userActivationDTO: UserActivationDTO = req.body;
        const result = await userService.userActivation(userActivationDTO);
        res.status(201).cookie("user_token", result, cookieOption).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function userLogin(req: Request, res: Response, next: NextFunction) {
    try {
        const userLoginDTO: UserLoginDTO = req.body;
        const result = await userService.userLogin(userLoginDTO);
        res.status(201).cookie("user_token", result, cookieOption).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function userInfo(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await userService.userInfo(req.userId)
        res.status(201).json({ success: true, result });
    } catch (error) { next(error) }
}

export async function userLogout(req: Request, res: Response, next: NextFunction) {
    try {
        res.cookie("user_token", null, {expires: new Date(Date.now()), httpOnly: true});
        res.status(201).json({success: true, message: "로그아웃 했습니다."})
    } catch (error) { next(error); }
};