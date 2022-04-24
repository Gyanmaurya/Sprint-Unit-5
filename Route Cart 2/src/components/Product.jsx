import { useState ,useEffect} from "react";

  
import './Product.css'
import axios from "axios"
import { Link } from "react-router-dom";

 export const Product=()=>{
  const [user,setUser]=useState([]);
  useEffect(()=>{
      axios.get('https://reqres.in/api/users').then(({data})=>{
          setUser(data.data)
      });
  },[]);
 
 return (
 
  <div>
  {user.map((user)=>(<p key={user.id}><Link  to={`/product/:${user.id}`} >
      {user.id}.{user.first_name}</Link></p>))}
</div>
 )
}