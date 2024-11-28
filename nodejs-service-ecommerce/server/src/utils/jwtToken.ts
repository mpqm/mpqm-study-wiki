import config from '../configs/validatedEnv';
import jwt from 'jsonwebtoken';
import { ObjectId } from "mongoose";
import { UserDoc } from '../models/user';
import { Request } from 'express';
import { UserSignupDTO } from '../dto/user';
import { SellerSignupDTO } from '../dto/seller';

export function createActivationUserToken(userSignupDTO: UserSignupDTO) { return jwt.sign(userSignupDTO, config.activationSecret, { expiresIn: "5m" }) }

export function createActivationSellerToken(registerSellerDTO: SellerSignupDTO) { return jwt.sign(registerSellerDTO, config.activationSecret, { expiresIn: "5m" }) }

export const cookieOption = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none" as const,
};