import { NextFunction, Request, Response } from "express";
import { SellerActivationDTO, SellerLoginDTO, SellerSignupDTO } from "../dto/seller";
import * as sellerService from "../services/seller";
import { cookieOption } from "../utils/jwtToken";

export async function sellerSignup(req: Request, res: Response, next: NextFunction) {
    try {
        const sellerSignupDTO: SellerSignupDTO = req.body;
        const result = await sellerService.sellerSignup(sellerSignupDTO);
        res.status(201).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function sellerActivation(req: Request, res: Response, next: NextFunction) {
    try {
        const sellerActivationDTO: SellerActivationDTO = req.body;
        const result = await sellerService.sellerActivation(sellerActivationDTO);
        res.status(201).cookie("seller_token", result, cookieOption).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function sellerLogin(req: Request, res: Response, next: NextFunction) {
    try {
        const sellerLoginDTO: SellerLoginDTO = req.body;
        const result = await sellerService.sellerLogin(sellerLoginDTO);
        res.status(201).cookie("seller_token", result, cookieOption).json({ success: true, result });
    } catch (error) { next(error); }
};

export async function sellerInfo(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await sellerService.sellerInfo(req.userId)
        res.status(201).json({ success: true, result });
    } catch (error) { next(error) }
}