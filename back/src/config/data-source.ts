import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { DB_NAME, DB_PASS, DB_PORT, DB_USERNAME, HOST } from "./envs";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASS,
  database: DB_NAME,
  // dropSchema: true,
  synchronize: true,
  logging: ["error"],
  entities: [User, Appointment, Credential],
  subscribers: [],
  migrations: [],
});
