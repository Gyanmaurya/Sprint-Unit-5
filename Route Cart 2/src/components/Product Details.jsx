
import axios from "axios";
import {  useEffect, useState } from "react";
import {  useParams } from "react-router-dom"

 export const ProductDetail=()=>{
    const { id }=useParams();
    const [user,setUser]=useState({});
    // const {isAuth}=useContext(AuthContext)
    // console.log(useQuery("page"))
    
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/4`).then(({data})=>{
            setUser(data.data)
            
        })
    },[]);
   
    
    return (
        <div>
            <div>User Id {id}</div>
            <img src={user.avatar} alt="" />
           <div>{user.first_name}</div>
           <div>{user.last_name}</div>
           <div>{user.email}</div>
        </div>
    )

 }