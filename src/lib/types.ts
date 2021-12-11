enum envEnum {
  development = "development",
  test = "test",
  production = "production",
}

export type envType = "development" | "test" | "production";

export interface databaseEnv {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  port?: number;
}

export interface ProcessEnv {
  
}

export type databaseAttributes = { [key in envEnum]: databaseEnv };
