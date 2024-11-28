import { RequestHandler } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import UserModel from "../models/user";

// 로그인된 사용자의 정보를 가져오는 컨트롤러 함수
export const getAuth: RequestHandler = async (req, res, next) => {
    try {
        // 세션에서 userId 값을 사용해 사용자 정보를 DB에서 조회
        const user = await UserModel.findById(req.session.userId).select("+email").exec();
        res.status(200).json(user); // 클라이언트에게 응답
    } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 사용자 등록을 처리하는 컨트롤러 함수
interface RegisterBody { username?: string; email?: string; password?: string; }
export const register: RequestHandler<unknown, unknown, RegisterBody, unknown> = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const passwordRaw = req.body.password;
    try {
        // 필수 정보가 누락된 경우, 에러 생성
        if (!username || !email || !passwordRaw) { throw createHttpError(400, "매개 변수 누락"); }
        // 사용자 이름이 이미 존재하는지 확인하고 존재하면 에러 생성
        const existingUsername = await UserModel.findOne({ username: username }).exec();
        if (existingUsername) { throw createHttpError(409, "사용자 이름이 이미 존재합니다. 다른 이름을 사용하세요."); }

        // 이메일 주소가 이미 존재하는지 확인하고 존재하면 에러 생성
        const existingEmail = await UserModel.findOne({ email: email }).exec();
        if (existingEmail) { throw createHttpError(409, "이메일 주소가 이미 존재합니다. 다른 주소를 사용하세요"); }

        const passwordHashed = await bcrypt.hash(passwordRaw, 10); // 비밀번호 해시처리
        // 새로운 사용자를 데이터베이스에 생성
        const newUser = await UserModel.create({ username: username, email: email, password: passwordHashed, });
        req.session.userId = newUser._id; // 사용자 등록 성공 후, 세션에 사용자 ID 저장
        res.status(201).json(newUser);  // 새로운 사용자 정보를 클라이언트에게 응답
    } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 사용자 로그인을 처리하는 컨트롤러 함수
interface LoginBody { email?: string; password?: string; }
export const login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    // 요청에서 사용자 로그인에 필요한 정보(email, password) 추출
    const email = req.body.email;
    const password = req.body.password;
    try {
        // 필수 정보가 누락된 경우, 에러 생성
        if (!email || !password) { throw createHttpError(400, "매개 변수 누락"); }

        // 이메일 주소를 사용해 사용자를 DB에서 조회, 조회 안되면 에러 생성
        const user = await UserModel.findOne({ email: email }).select("+username +password").exec();
        if (!user) { throw createHttpError(401, "잘못된 인증 정보"); }

        // 비밀번호를 비교해 비밀번호가 일치하지 않는 경우 에러 생성, 일치하면 인증 확인
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) { throw createHttpError(401, "잘못된 인증 정보"); }

        req.session.userId = user._id; // 로그인 성공 후, 세션에 사용자 ID 저장
        res.status(201).json(user); // 사용자 정보를 클라이언트에게 응답
    } catch (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
};

// 사용자 로그아웃을 처리하는 컨트롤러 함수
export const logout: RequestHandler = (req, res, next) => {
    req.session.destroy((error) => {  // 세션을 파기해 로그아웃
        if (error) { next(error); } // 에러 발생시, 다음 미들웨어로 에러넘김
        else { res.sendStatus(204); } // 204 상태 코드를 클라이언트에게 응답
    });
};