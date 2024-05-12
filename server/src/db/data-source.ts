import { DataSource } from "typeorm";
import { Apartments } from "./models/Apartments.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Apartments],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
