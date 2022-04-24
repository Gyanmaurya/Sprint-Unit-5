import { useState ,useEffect} from "react";

  
import './Product.css'
import axios from "axios"

 export const Product=()=>{
  const [user,setUser]=useState([]);
  useEffect(()=>{
      axios.get('https://reqres.in/api/users').then(({data})=>{
          setUser(data.data)
      });
  },[]);
 
 return (
 
     <div>
         {user.map((user)=>(<div className="catagory" key={user.id}>
           <img src={user.avatar} alt="" />
           <div>{user.first_name}</div>
           <div>{user.last_name}</div>
           <div>{user.email}</div>
         </div>))}
     </div>
 )
}