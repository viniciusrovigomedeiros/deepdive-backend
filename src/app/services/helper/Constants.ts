export enum ErrorMessage {
  BAD_CREDENTIALS = "bad_credentials",
  NOT_IMPLEMENTED = "not_implemented",
  ALREADY_EXISTS = "already_exists",
  NAME_ALREADY_EXISTS = "name_already_exists",
  NOT_FOUND = "not_found",
  INTERNAL_ERROR = "internal_error",
  INVALID_BODY = "invalid_body",
  AUTHENTICATION_ERROR = "autentication_error",
  INVALID_CODE = "invalid_code",
}

export const INVALID_MESSAGE = 'Não foi possivel processar a mensagem.'
export const k_error = "error";
export const k_success = "success";

export enum SuccessMessage {
  UDPATED = "updated",
  CREATED = "created",
  SUCCESS = "success",
}

export function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
