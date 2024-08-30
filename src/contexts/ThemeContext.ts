import { createContext } from "react";

export interface ThemeItem {
    name:string;
    bgColor:string;
    fgColor:string;
}

export const ThemeContext = createContext<any>("");
