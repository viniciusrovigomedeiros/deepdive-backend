import { Repository } from "typeorm";
import IService from "../interfaces/IServices";
import UserEntity from "../entities/UserEntity";
import { AppDataSource } from "../../database/data-source";
import { IResponse } from "../interfaces/IResponse";
import { ErrorResponse, SuccessResponse } from "./helper/UserResponse";
import { ErrorMessage, } from "./helper/Constants";
import { AuthHelper } from "./helper/AuthHelper";
import { IAuthHelper } from "../interfaces/IAuthHelper";

export class AuthUserService implements IService<any> {
  private readonly userRepository: Repository<UserEntity>;
  private readonly authHelper: IAuthHelper;
  constructor() {
    this.authHelper = new AuthHelper();
    this.userRepository = AppDataSource.getRepository<UserEntity>(UserEntity);
  }
  async execute(email: string, password: string): Promise<IResponse<any>> {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (!user) throw new ErrorResponse(ErrorMessage.BAD_CREDENTIALS);
    const accessToken = this.authHelper.signIn(user.id)
    return new SuccessResponse<UserEntity>(user, accessToken);
  }
}
