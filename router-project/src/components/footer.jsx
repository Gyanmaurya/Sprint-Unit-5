import { Link } from "react-router-dom"
import '.././App.css'


 export const Footer=()=>{
     return (
         <div>
          <Link className="footer" to={"/fqa"}>FQA</Link>
          <Link className="footer" to={"/job"}>Job</Link>
          <Link className="footer" to={"/social"}>Social Media</Link>

         </div>
     )
 }