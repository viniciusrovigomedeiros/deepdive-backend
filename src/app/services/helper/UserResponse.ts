import IUser from "../../interfaces/IUser";
import { IResponse } from "../../interfaces/IResponse";
import { ErrorMessage, k_error, k_success } from "./Constants";

export class ErrorResponse implements IResponse<string> {
  constructor(result?: string, decription?: string | string[], token?: string) {
    this.status = k_error;
    this.result = result ?? ErrorMessage.NOT_IMPLEMENTED;
    this.description = decription;
    this.token = token;
  }
  status: string;
  result?: string;
  description?: string | string[];
  token?: string;
}

export class SuccessResponse<T> implements IResponse<T> {
  constructor(result?: T, token?: string) {
    this.status = k_success;
    this.result = result;
    this.token = token;
  }
  description?: string;
  status: string;
  result?: T;
  token?: string;
}
