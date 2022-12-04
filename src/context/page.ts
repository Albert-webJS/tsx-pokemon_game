import { createContext, useContext } from "react";

export interface PageProviderProps {
    page: string;
    onChangePage: (value: string) => void
}

const PageContext = createContext<PageProviderProps | null>(null);

export const PageProvider = PageContext.Provider;

export const usePageContex = () => {
    const context = useContext(PageContext);

    if (context === null) {
        throw new Error("Can not `usePageContext` outside of `PageProvider`");
    }

    return context;
};