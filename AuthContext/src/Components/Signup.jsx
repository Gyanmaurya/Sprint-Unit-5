import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContsxt"
import { Navbar } from "./Navbar"

export const Signup=()=>{
    const {toggleAuth}= useContext(AuthContext)
    
    return (
        
        <div>
            <button onClick={()=>{toggleAuth(`Login Successfully Token: QpwL5tke4Pnpja7X4`)}}>Login</button>
           
        </div>
    )
}