import '.././App.css'
import { Link } from "react-router-dom"
 export const Navbar=()=>{

    return (
        <div id='navdiv' >
       <Link className='Navbar' to={"/"}>Home</Link>
       
       <Link className='Navbar' to={"/about"}> About  </Link>
       <Link className='Navbar' to={"/contact"}> Contact  </Link>
       
       <Link className='Navbar' to={"/products"}> Product  </Link>
       <Link className='Navbar' to={"/catagory"}> Catagory  </Link>
        </div>
        )   
 }