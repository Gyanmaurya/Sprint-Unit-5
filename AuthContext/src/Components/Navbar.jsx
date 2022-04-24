import { Signup } from "./Signup";
import { AuthContext } from "../Contexts/AuthContsxt";
import { useContext } from "react";
import { Login } from "./Login";


export const Navbar=()=>{
    

    
return (<nav  style={{
    border:"1px solid teal",
    height:"40px",
    backgroundColor:"blue",
    display:"flex",
    justifyContent:"center",
    fontSize:"20px",
    padding:"15px",
    gap:"20px",
    color:"teal"
}}>
    <Login></Login>
    <Signup></Signup>



</nav>)


}