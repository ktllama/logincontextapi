import { createContext } from "react";

export const LoginContext = createContext({});
export const ThemeContext = createContext()

//BASIC IDEA
//create context providers
//pass state from the parent to all the dif children that you want to have access to that state
//inside the children use context hook to add value and use the state