export interface IFirebaseRequest {
    [x: string]: any;
    config: any;
    data: Data
    headers: any;
    request: any
    status: number;
    statusText: string;


}

interface Data {
    displayName: string;
    email: string;
    idToken: string;
    kind: string;
    localId: string;
    registered: boolean;
}