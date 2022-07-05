import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string;
    title: string;
    urlBg?: string;
    colorBg?: string;
    children?: ReactNode
}