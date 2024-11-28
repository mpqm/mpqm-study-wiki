import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../configs/validatedEnv";
import { UserActivationDTO,UserLoginDTO,UserSignupDTO } from "../dto/user";
import { User, UserDoc } from "../models/user";
import CustomError from "../utils/customError";
import { createActivationUserToken } from "../utils/jwtToken";
import { sendActivationUserEmail } from "../utils/sendMail";

export async function userSignup(userSignupDTO: UserSignupDTO): Promise<string> {
    try {
        const { name, email, password } = userSignupDTO
        if (!name || !email || !password) { throw new CustomError("name, email, password are required", 422) }
        if (password.length < 4){throw new CustomError("비밀번호는 4자리 이상이야 합니다.", 422)}
        const existingUser = await User.findOne({ email });
        if (existingUser) { throw new CustomError("유저가 이미 존재합니다.", 409); }
        const activationToken = createActivationUserToken(userSignupDTO);
        const activationUrl = `http://localhost:3000/user/activation/${activationToken}`
        await sendActivationUserEmail(userSignupDTO, activationUrl)
        return `계정을 활성화 하기 위해 ${userSignupDTO.email}을 확인해주세요.`
    } catch (error: any) { throw new CustomError(error.message, 400) }
};

export async function userActivation(userActivationDTO: UserActivationDTO): Promise<string> {
    try {
        const { activationToken } = userActivationDTO;
        const userSignupDTO: JwtPayload = jwt.verify(activationToken, config.activationSecret) as JwtPayload;
        const { name, email, password } = userSignupDTO
        if (!userSignupDTO) { throw new CustomError("유효하지 않은 토큰입니다.", 400); }
        let user = await User.findOne({ email })
        if (user) { throw new CustomError("유저가 이미 존재합니다.", 400); }
        user = await User.create({ name, email, password })
        return user.getJwtToken();
    } catch (error: any) { throw new CustomError(error.message, 500) }
}

export async function userLogin(userLoginDTO: UserLoginDTO): Promise<string> {
    try {
        const { email, password } = userLoginDTO
        if (!email || !password) { throw new CustomError("항목을 전부 입력해주세요.", 400) }
        const user = await User.findOne({ email }).select("+password")
        if (!user) { throw new CustomError("존재하지 않는 유저 입니다. ", 400) }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) { throw new CustomError("올바른 정보를 기입해주세요.", 400) }
        return user.getJwtToken();
    } catch (error: any) { throw new CustomError(error.message, 500) }
}

export async function userInfo(id: string): Promise<UserDoc> {
    try {
        const user = await User.findById(id);
        if (!user) { throw new CustomError("존재하지 않는 유저 입니다.", 400) }
        return user
    } catch (error: any) { throw new CustomError(error.message, 500) }
}