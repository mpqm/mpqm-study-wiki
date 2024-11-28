import { InferSchemaType, model, Schema, Types } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "../configs/validatedEnv"

interface SellerDoc extends Document {
    getJwtToken: () => string;
    comparePassword: (enteredPassword: string) => Promise<boolean>;
}

const sellerSchema = new Schema({
    name: { type: String, required: [true, "판매자 이름을 입력하세요."], },
    email: { type: String, required: [true, "판매자 이메일 주소를 입력하세요."], },
    password: { type: String, required: [true, "판매자 비밀번호를 입력하세요"], minLength: [4, "패스워드 길이는 4글자 이상이어야 합니다."], select: false, },
    shopName: { type: String, required: [true, "쇼핑몰 이름을 입력하세요."], },
    phoneNumber: { type: Number, },
    description: { type: String },
    address: { type: String, required: true },
    zipCode: { type: Number, required: true },
    role: { type: String, default: "seller", },
    createdAt: { type: Date, default: Date.now(), },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});

//  Hash password
sellerSchema.pre("save", async function (next) {
    if (!this.isModified("password")) { return next(); }
    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
sellerSchema.methods.getJwtToken = function () { return jwt.sign({ id: this._id }, config.jwtSecret, { expiresIn: config.jwtExpiresIn }); };

// compare password
sellerSchema.methods.comparePassword = async function (enteredPassword: string) { return await bcrypt.compare(enteredPassword, this.password); };

// sellerSchema.virtual('id').get(function (this: { _id: string }) { return this._id.toHexString(); });

// type SellerDoc = Document & InferSchemaType<typeof sellerSchema>;

// interface ExtendedSellerDoc extends SellerDoc {

// }

const Seller = model<SellerDoc>("Seller", sellerSchema);

export { Seller, SellerDoc }