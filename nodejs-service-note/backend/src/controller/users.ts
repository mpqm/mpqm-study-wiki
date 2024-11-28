import { RequestHandler } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import UserModel from "../models/user"; // "../models/user"에서 MongoDB User 모델을 가져옴


// 사용자 인증된 사용자 정보를 가져오는 핸들러
export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    try {
        // 세션에 저장된 userId를 사용해 사용자를 조회
        const user = await UserModel.findById(req.session.userId).select("+email").exec();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// 회원 가입 요청을 처리하는 핸들러
interface SignUpBody {
    username?: string;
    email?: string;
    password?: string;
}

export const signUp: RequestHandler<unknown, unknown, SignUpBody, unknown> = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const passwordRaw = req.body.password;
    try {
        if (!username || !email || !passwordRaw) {
            // 필수 값이 누락된 경우 에러
            throw createHttpError(400, "Parameters missing");
        }

        // 사용자명이 이미 존재하는지 확인
        const existingUsername = await UserModel.findOne({ username: username }).exec();
        if (existingUsername) {
            // 사용자명이 이미 존재하는 경우 에러
            throw createHttpError(409, "Username already taken. Please choose a different one or log in instead.");
        }

        // 이메일이 이미 존재하는지 확인
        const existingEmail = await UserModel.findOne({ email: email }).exec();
        if (existingEmail) {
            // 이메일이 이미 존재하는 경우 에러를 throw
            throw createHttpError(409, "A user with this email address already exists. Please log in instead.");
        }

        // 비밀번호를 해시해 저장
        const passwordHashed = await bcrypt.hash(passwordRaw, 10);

        // 새로운 사용자를 생성
        const newUser = await UserModel.create({
            username: username,
            email: email,
            password: passwordHashed,
        });

        // 세션에 사용자 ID를 저장
        req.session.userId = newUser._id;

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

// 로그인 요청을 처리하는 핸들러
interface LoginBody {
    username?: string;
    password?: string;
}

export const login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        if (!username || !password) {
            // 필수 값이 누락된 경우 에러
            throw createHttpError(400, "Parameters missing");
        }

        // 사용자명으로 사용자를 조회
        const user = await UserModel.findOne({ username: username }).select("+password +email").exec();
        if (!user) {
            // 사용자가 존재하지 않는 경우 에러
            throw createHttpError(401, "Invalid credentials");
        }

        // 비밀번호 일치 여부를 확인
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            // 비밀번호가 일치하지 않는 경우 에러
            throw createHttpError(401, "Invalid credentials");
        }

        // 세션에 사용자 ID를 저장
        req.session.userId = user._id;
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

// 로그아웃 요청을 처리하는 핸들러
export const logout: RequestHandler = (req, res, next) => {
    req.session.destroy((error) => {
        if (error) {
            next(error);
        } else {
            res.sendStatus(200);
        }
    });
};
