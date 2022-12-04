import { getUniqId } from "../../../utils/";

export interface MenuItem {
    id: string;
    title: string;
    path: string;
}
export const MENU: MenuItem[] = [
    {
        id: getUniqId(),
        title: "HOME",
        path: "/",
    },
    {
        id: getUniqId(),
        title: "GAME",
        path: "game",
    },
    {
        id: getUniqId(),
        title: "ABOUT",
        path: "about",
    },
    {
        id: getUniqId(),
        title: "CONTACT",
        path: "contact",
    },
];