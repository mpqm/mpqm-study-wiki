import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../configs/validatedEnv";

import { SellerActivationDTO, SellerLoginDTO, SellerSignupDTO} from "../dto/seller";
import { Seller, SellerDoc } from "../models/seller";
import CustomError from "../utils/customError";
import { createActivationSellerToken } from "../utils/jwtToken";
import { sendActivationSellerEmail } from "../utils/sendMail";

export async function sellerSignup(sellerSignupDTO: SellerSignupDTO): Promise<string> {
    try {
        const {name, email, password, shopName, phoneNumber, address, zipCode } = sellerSignupDTO;
        const existingSeller = await Seller.findOne({ email });
        if (existingSeller) { throw new CustomError("판매자가 이미 존재합니다.", 409); }
        // const seller ={ name, email, password, shopName, phoneNumber, description, address, zipCode}
        const activationToken = createActivationSellerToken(sellerSignupDTO);
        const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`
        await sendActivationSellerEmail(sellerSignupDTO, activationUrl)
        return `계정을 활성화 하기 위해 ${sellerSignupDTO.email}을 확인해주세요.`
    } catch (error: any) { throw new CustomError(error.message, 400) }
}

export async function sellerActivation(sellerActivationDTO: SellerActivationDTO): Promise<string> {
    try {
        const { activationToken } = sellerActivationDTO;
        const registerSellerDTO: JwtPayload = jwt.verify(activationToken, config.activationSecret) as JwtPayload;
        const { name, email, password, shopName, phoneNumber, zipCode, address,   } = registerSellerDTO
        if (!registerSellerDTO) { throw new CustomError("유효하지 않은 토큰입니다.", 400); }
        let seller = await Seller.findOne({ email })
        if (seller) { throw new CustomError("판매자가 이미 존재합니다.", 400); }
        seller = await Seller.create({ name, email, password, shopName, zipCode, address, phoneNumber })
        return seller.getJwtToken();
    } catch (error: any) { throw new CustomError(error.message, 500) }
}

export async function sellerLogin(userLoginDTO: SellerLoginDTO): Promise<string> {
    try {
        const { email, password } = userLoginDTO
        if (!email || !password) { throw new CustomError("항목을 전부 입력해주세요.", 400) }
        const user = await Seller.findOne({ email }).select("+password")
        if (!user) { throw new CustomError("존재하지 않는 판매자 입니다. ", 400) }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) { throw new CustomError("올바른 정보를 기입해주세요.", 400) }
        return user.getJwtToken();
    } catch (error: any) { throw new CustomError(error.message, 500) }
}

export async function sellerInfo(id: string): Promise<SellerDoc> {
    try {
        const user = await Seller.findById(id);
        if (!user) { throw new CustomError("존재하지 않는 판매자 입니다.", 400) }
        return user
    } catch (error: any) { throw new CustomError(error.message, 500) }
}