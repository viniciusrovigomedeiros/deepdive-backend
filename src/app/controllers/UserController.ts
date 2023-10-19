import { Request, Response, Router } from "express";
import UserEntity from "../entities/UserEntity";
import { IController } from "../interfaces/IController";
import { AppDataSource } from "../../database/data-source";
import { injectable } from "tsyringe";
import httpStatus from "http-status";
import { AuthUserService } from "../services/AuthUserService";
import { ErrorResponse } from "../services/helper/UserResponse";
import { ErrorMessage } from "../services/helper/Constants";

@injectable()
export default class AuthUserController implements IController<UserEntity> {
  async handle(req: Request, res: Response): Promise<Response> {
    const userRepository = new AuthUserService();
    const { email, password } = req.body;
    try {
      const result = await userRepository.execute(email, password);
      return res.status(200).json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json(new ErrorResponse(ErrorMessage.INTERNAL_ERROR, error, ""));
    }
  }
}
