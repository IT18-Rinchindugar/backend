import * as dotenv from "dotenv";
import { ProcessEnv } from '../lib'
dotenv.config();

export const { NODE_ENV = "development", APP_PORT = 8000 }: ProcessEnv  = process.env;
