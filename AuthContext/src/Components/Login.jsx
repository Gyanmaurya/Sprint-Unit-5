import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContsxt";
import { Navbar } from "./Navbar"

export const Login=()=>{
    const { toggleAuth }=useContext(AuthContext);
return (
  
    
    <div>
       <button onClick={()=>{
    toggleAuth("Login First");
}}>Logout</button>


       
    </div>
)


}