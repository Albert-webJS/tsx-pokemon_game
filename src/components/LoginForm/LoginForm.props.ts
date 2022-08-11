export type TypeUserInfo = {
    onLogin?: boolean;
    onRegister?: boolean;
    email: string;
    password: string;
    returnSecureToken?: true;
};

export interface LoginFormProps {
    onSubmit: (props: TypeUserInfo) => void;
    isResetFiled: boolean;
}
