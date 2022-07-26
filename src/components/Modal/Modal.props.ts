import { ReactNode } from "react";

export interface ModalProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    isClose: (state: boolean) => void;
}