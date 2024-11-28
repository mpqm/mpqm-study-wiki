import { InferSchemaType, model, Schema, Types } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import config from "../configs/validatedEnv"

interface UserDoc extends Document {
    getJwtToken: () => string;
    comparePassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema = new Schema({
    name: { type: String, required: [true, "이름을 입력하세요."], },
    email: { type: String, required: [true, "이메일을 입력하세요."], },
    password: { type: String, required: [true, "비밀번호를 입력하세요."], minLength: [4, "패스워드 길이는 4글자 이상이어야 합니다."], select: false, },
    phoneNumber: { type: Number, },
    addresses: [{
        country: { type: String, },
        city: { type: String, },
        address1: { type: String, },
        address2: { type: String, },
        zipCode: { type: Number, },
        addressType: { type: String, },
    }],
    // avatar: {
    //     public_id: { type: String, required: true, },
    //     url: { type: String, required: true, },
    // },
    role: { type: String, default: "user", },
    createdAt: { type: Date, default: Date.now(), },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});

//  Hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) { return next(); }
    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () { return jwt.sign({ id: this._id }, config.jwtSecret, { expiresIn: config.jwtExpiresIn }); };

// compare password
userSchema.methods.comparePassword = async function (enteredPassword: string) { return await bcrypt.compare(enteredPassword, this.password); };

// userSchema.virtual('id').get(function (this: { _id: string }) { return this._id.toHexString(); });

// type UserDoc = Document & InferSchemaType<typeof userSchema>;

// interface ExtendedUserDoc extends UserDoc {

// }

const User = model<UserDoc>("User", userSchema);

export { User, UserDoc }