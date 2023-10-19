import cors from "cors";
import { config } from "dotenv";
import express from "express";
import "reflect-metadata";
import { container } from "tsyringe";
import AudioSendController from "./app/controllers/SendAudioController";
import AuthUserController from "./app/controllers/UserController";
import UserRouter from "./app/routes/routes";
import { AppDataSource } from "./database/data-source";
container.register("AuthUserController", {
  useClass: AuthUserController,
});

container.register("AudioSendController", {
  useClass: AudioSendController,
});
config();
const app = express();
const port = 3333;

app.use(cors());

app.use(express.json());

const userRouter = container.resolve(UserRouter);
app.use(userRouter.getRouter());

AppDataSource.initialize().then(async () => {
  console.log("Database OK");
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
