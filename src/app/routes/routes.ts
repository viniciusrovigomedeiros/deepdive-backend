import { Router } from "express";
import { inject, injectable } from "tsyringe";
import AuthUserController from "../controllers/UserController";
import { JwtAuthValidatorMiddleware } from "../controllers/middleware/JwtAuthValidatorMiddleware";
import AudioSendController from "../controllers/SendAudioController";

@injectable()
export default class UserRouter {
  private routers = Router();

  constructor(
    @inject("AuthUserController")
    private authUserController: AuthUserController,
    @inject("AudioSendController")
    private audioSendController: AudioSendController
  ) {
    this.routers.post("/auth", (req, res) =>
      this.authUserController.handle(req, res)
    );
    this.routers.post(
      "/send/audio/:user_id",
      JwtAuthValidatorMiddleware,
      (req, res) => this.audioSendController.handle(req, res)
    );
  }
  public getRouter(): Router {
    return this.routers;
  }
}
