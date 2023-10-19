import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateUsersTable1697464347338 } from "./migrations/1697464347338-CreateUsersTable";
import UserEntity from "../app/entities/UserEntity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "admin123",
  database: "deepdive",
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [CreateUsersTable1697464347338],
  subscribers: [],
});
