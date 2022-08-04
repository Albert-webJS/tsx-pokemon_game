import { IUserError} from './IUserError';

export interface IUserLogin {
    displayName: string;
    email: string;
    expiresIn: string;
    idToken: string;
    kind: string;
    localId: string;
    refreshToken: string;
    registered: boolean;
    error?: IUserError;
}