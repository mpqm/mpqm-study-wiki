import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres", // admin 이름
    password: "password", // admin 비밀번호
    database: "postgres", // database 이름
    synchronize: true,
    logging: false,
    entities: [User], // entity생성한것
    migrations: [],
    subscribers: [],
})
