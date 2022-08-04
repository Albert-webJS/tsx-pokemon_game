import { IUserError } from "./IUserError";

export interface IUserSingUP {
    email: string;
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
    error?: IUserError;
}