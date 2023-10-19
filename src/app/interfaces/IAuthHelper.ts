export interface IAuthHelper {
  signIn(id: string): string;
  decode(token: string): string;
}
