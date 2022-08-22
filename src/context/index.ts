import { createContext } from "react";

export interface ProviderProps {
    page: string;
    onChangePage: (value: string) => void
}

const initialState = {
    page: "",
    onChangePage: () => undefined
};


export const PageContext = createContext<ProviderProps>(initialState);