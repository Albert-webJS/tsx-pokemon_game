import { createContext } from "react";
import { FirebaseContextProps } from "./firebaseContextProps";

export const FirebaseContext = createContext<FirebaseContextProps | null>(null);