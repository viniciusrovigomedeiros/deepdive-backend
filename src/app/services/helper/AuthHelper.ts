import { IAuthHelper } from "../../interfaces/IAuthHelper";
import * as Jwt from "jsonwebtoken";
import { Enviroment } from "../../shared/Enviroment";

type tokenStruct = {
  user_id: string;
  api: string;
};

export class AuthHelper implements IAuthHelper {
  signIn(user_id: string): string {
    return Jwt.sign({ user_id: user_id }, Enviroment.JWTHash, {
      expiresIn: "8h",
    });
  }
  decode(token: string): string {
    return (Jwt.verify(token, Enviroment.JWTHash) as tokenStruct).user_id;
  }
}
