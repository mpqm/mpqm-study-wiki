import dotenv from "dotenv";
import { cleanEnv, port, str, num } from "envalid";

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) { throw new Error("Couldn't find .env file"); }

const { DATABASE_URL } = cleanEnv(process.env, { DATABASE_URL: str(), });
const { PORT } = cleanEnv(process.env, { PORT: port(), });
const { LOG_LEVEL } = cleanEnv(process.env, { LOG_LEVEL: str(), });
const { JWT_SECRET } = cleanEnv(process.env, { JWT_SECRET: str(), });
const { JWT_EXPIRES } = cleanEnv(process.env, { JWT_EXPIRES: num(), });
const { ACTIVATION_SECRET } = cleanEnv(process.env, { ACTIVATION_SECRET: str(), });
const { SMPT_HOST } = cleanEnv(process.env, { SMPT_HOST: str(), });
const { SMPT_PORT } = cleanEnv(process.env, { SMPT_PORT: port(), });
const { SMPT_MAIL } = cleanEnv(process.env, { SMPT_MAIL: str(), });
const { SMPT_SERVICE } = cleanEnv(process.env, { SMPT_SERVICE: str(), });
const { SMPT_PASSWORD } = cleanEnv(process.env, { SMPT_PASSWORD: str(), });

export default {
    port: PORT,
    databaseURL: DATABASE_URL,
    logs: { level: LOG_LEVEL || 'silly', },
    jwtSecret: JWT_SECRET,
    jwtExpiresIn: JWT_EXPIRES,
    activationSecret: ACTIVATION_SECRET,
    smptHost: SMPT_HOST,
    smptPort: SMPT_PORT,
    smptMail: SMPT_MAIL,
    smptService: SMPT_SERVICE,
    smptPassword: SMPT_PASSWORD
};
