import { createContext } from "react";

//setting the state and dispatch context to be used
export const StateContext = createContext();
export const DispatchContext = createContext();


//setting initial state here instead of defining it within the useReducer hook
export const initialState = {
    username: '',
    showProfile: false,
    darkTheme: true
}

//creating the reducer switch statment
export const reducer = (state, action) => {
    switch (action.type) {
        case 'setUsername':
            return { ...state, username : action.payload};
        case 'toggleShowProfile':
            return { ...state, showProfile: !state.showProfile};
        case 'toggleTheme':
            return { ...state, darkTheme: !state.darkTheme};
        default:
            throw new Error();
    }
}

//action helps avoid typos
export const ACTION = {
    SETUSERNAME: 'setUsername',
    SHOWPROFILE: 'toggleShowProfile',
    TOGGLETHEME: 'toggleTheme'
}
