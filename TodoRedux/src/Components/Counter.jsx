 import React from "react";
import { addCount, reduceCount } from "../redux/action";
 import { store } from "../redux/Store";
 import { useState } from "react";
 import { useDispatch,useSelector } from "react-redux";
 const Counter=()=>{
    //  const {Counter}=store.getState()
    //  const {dispatch}=store;
    //  const [state,setState]=useState(0)
    //  const forceUpdate=()=>setState(state+1)
    //  const handleAdd=()=>{
    //     dispatch(addCount(1))
    //     setState(state+1)
    //  }
    //  const handleRed=()=>{
    //     dispatch(reduceCount(1))
    //     setState(state-1)
    //  };
    const dispatch=useDispatch()
    const Counter=useSelector((store)=> store.Counter)
     return(
         <div>
             <h1>Counter:{Counter}</h1>
             <button onClick={()=>{dispatch(addCount(1))}} >add</button>
             <button onClick={()=>{dispatch(reduceCount(1))}}>reduce</button>
         </div>
     )
 };
 export {Counter};