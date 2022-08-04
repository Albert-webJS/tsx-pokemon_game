interface Errors {
    domain: string;
    message: string;
    reason: string
}
interface Error {
    code: number
    errors: Errors[];
    message: string
}

export interface IUserError {
    error: Error;
}