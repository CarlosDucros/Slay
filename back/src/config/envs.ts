import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

const PORT = Number(process.env.PORT) || 3000;
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 5432;
const DB_USERNAME = process.env.DB_USERNAME || "test";
const DB_PASS = process.env.DB_PASS || "test";
const DB_NAME = process.env.DB_NAME || "test";
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_HOST = process.env.EMAIL_HOST;
export {
  PORT,
  PROTO,
  HOST,
  DB_PASS,
  DB_NAME,
  DB_USERNAME,
  DB_PORT,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_PASS,
  EMAIL,
};
