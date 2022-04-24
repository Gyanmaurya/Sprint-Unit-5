import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContsxt";

export const Body=()=>{
const { isAuth }=useContext(AuthContext);

return (<div style={{
height:"500px",
width:"100%",
backgroundColor:"blue",
color:"white",
fontSize:"40px",
margin:"30px",

    
}}>
  <h1>Result:{isAuth}</h1>
</div>)

}