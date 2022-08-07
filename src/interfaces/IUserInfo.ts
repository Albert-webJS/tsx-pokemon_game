import { IUserError } from "./IUserError";

export interface IUserInfo {
    displayName: string;
    email: string;
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
    registered: boolean;
    error: IUserError;
}
