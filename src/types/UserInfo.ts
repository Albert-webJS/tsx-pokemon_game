import { IUserError } from "./UserError";

export interface IUserInfo {
    displayName: string;
    email: string;
    expiresIn?: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken?: string;
    registered: boolean;
    error?: IUserError;
}

export type TypeUserInfo = {
    onLogin?: boolean;
    onRegister?: boolean;
    email: string;
    password: string;
    returnSecureToken?: true;
  };