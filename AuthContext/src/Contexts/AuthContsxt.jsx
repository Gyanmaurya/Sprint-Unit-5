import { createContext,useState } from "react";

export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [isAuth,setAuth]=useState("Welcome Ours Websites");
    const [istheme,setTheme]=useState('blue')
    const toggleAuth=(val)=>{
        setAuth(val);
    }
    const toggleTheme=(val)=>{
        setTheme(val)
    }


    return (<AuthContext.Provider value= {{isAuth,toggleAuth,istheme,toggleTheme}}>
        {children}
    </AuthContext.Provider>);
}
