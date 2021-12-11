import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import * as dotenv from "dotenv";
import { database } from "../config";

dotenv.config();
const basename = path.basename(__filename);
const env: string = process.env.NODE_ENV || "development";
const config: any = database["development"];

const init = (dbName: string) => {
  const db: any = {};

  const sequelize: any = new Sequelize(
    dbName,
    config.username,
    config.password,
    config
  );

  fs.readdirSync(__dirname)
    .filter((file: any) => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach((file: any) => {
      const model = require(path.join(__dirname, file))(sequelize, DataTypes);
      db[model.name] = model;
    });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  sequelize
    .authenticate()
    .then(() => console.log(`Database connected`.cyan.underline.bold))
    .catch(() => {
      throw "error";
    });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
};

// init main database
export const connectDB = () => {
  init(config.database);
};
