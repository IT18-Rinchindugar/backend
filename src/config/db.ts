import * as dotenv from "dotenv";
import { databaseAttributes } from "../lib";

dotenv.config();

const {
  DATABASE_NAME = "app",
  DATABASE_USER = "appuser",
  DATABASE_PASSWORD = "apppass",
  DATABASE_HOST = "db",
} = process.env;

export const database: databaseAttributes = {
  development: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "postgres",
    port: 5432,
  },
  test: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "postgres",
  },
  production: {
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "postgres",
  },
};
