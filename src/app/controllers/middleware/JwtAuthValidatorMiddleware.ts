import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../../services/helper/UserResponse";
import { ErrorMessage } from "../../services/helper/Constants";
import { IAuthHelper } from "../../interfaces/IAuthHelper";
import { AuthHelper } from "../../services/helper/AuthHelper";

export function JwtAuthValidatorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHelper: IAuthHelper = new AuthHelper();

  try {
    if (
      authHelper.decode(req.headers["authorization"] as string) ==
      req.params.user_id
    ) {
      next();
    } else {
      throw new ErrorResponse(ErrorMessage.AUTHENTICATION_ERROR);
    }
  } catch (error: any) {
    return res
      .status(401)
      .json(new ErrorResponse(ErrorMessage.AUTHENTICATION_ERROR, error));
  }
}
