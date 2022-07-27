export type TypeUserInfo = {
    email: string;
    password: string;
};

export interface LoginFormProps {
    onSubmit: (props: TypeUserInfo) => void;
    isResetFiled: boolean;
}
