import { Request } from "express";
declare global {
    namespace Express {
        interface Request {
            userId: mongoose.Types.ObjectId;
        }
    }
}