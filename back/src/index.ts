import "reflect-metadata";
import { serverInitializer } from "./server/index";
import { AppDataSource } from "./config";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    serverInitializer();
  })
  .catch((err) => {
    console.error(err);
  });
