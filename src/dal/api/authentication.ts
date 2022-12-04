import { AxiosResponse } from "axios";
import { IFirebaseRequest, TypeUserInfo } from "../../types/";
import { instanse } from "../axios/axios";

export default {
    async singup(options: TypeUserInfo): Promise<AxiosResponse<IFirebaseRequest>> {
        const response = await instanse.post(`accounts:signUp`, options);

        return response;
    },
    async login(options: TypeUserInfo): Promise<AxiosResponse<IFirebaseRequest>> {
        const response = await instanse.post(`accounts:signInWithPassword`, options);

        return response;
    },
};