import { AxiosResponse } from "axios";
import { TypeUserInfo } from "../../components/LoginForm/LoginForm.props";
import { IFirebaseRequest } from "../../types/";
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