export type TypeUserInfo = {
    type: string;
    email: string;
    password: string;
};

export interface LoginFormProps {
    onSubmit: (props: TypeUserInfo) => void;
    isResetFiled: boolean;
}
