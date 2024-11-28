import nodemailer from 'nodemailer';
import config from '../configs/validatedEnv';
import { SellerSignupDTO } from '../dto/seller';
import { UserSignupDTO } from '../dto/user';
import CustomError from './customError';


interface mailOptions { email: string; subject: string; html: string }
async function sendMail(options: mailOptions) {
    const transporter = nodemailer.createTransport({
        host: config.smptHost,
        port: config.smptPort,
        service: config.smptService,
        auth: { user: config.smptMail, pass: config.smptPassword, },
    });

    const mailOptions = {
        from: config.smptMail,
        to: options.email,
        subject: options.subject,
        html: options.html,
    };

    await transporter.sendMail(mailOptions);
};

export async function sendActivationUserEmail(userSignupDTO: UserSignupDTO, activationUrl: string): Promise<void> {
    try {
        await sendMail({
            email: userSignupDTO.email,
            subject: "E-COMMERCE 계정 활성화",
            html: `<div style="text-align: center;">
                        <p>안녕하세요 ${userSignupDTO.name}님,</p>
                        <p>E-COMMERCE 계정을 활성화 시키려면 아래 링크를 클릭해주세요:</p>
                        <a href="${activationUrl}">${activationUrl}</a>
                    </div>`
        });
    } catch (error) { throw new CustomError("Failed to send activation email", 500); }
}

export async function sendActivationSellerEmail(sellerSignupDTO: SellerSignupDTO, activationUrl: string): Promise<void> {
    try {
        await sendMail({
            email: sellerSignupDTO.email,
            subject: "E-COMMERCE 판매자 계정 활성화",
            html: `<div style="text-align: center;">
                        <p>안녕하세요 ${sellerSignupDTO.name}님,</p>
                        <p>E-COMMERCE 계정을 활성화 시키려면 아래 링크를 클릭해주세요:</p>
                        <a href="${activationUrl}">${activationUrl}</a>
                    </div>`
        });
    } catch (error) { throw new CustomError("Failed to send activation email", 500); }
}
