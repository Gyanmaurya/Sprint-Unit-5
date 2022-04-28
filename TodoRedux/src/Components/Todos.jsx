
import { useState } from "react";
import {useDispatch ,useSelector } from "react-redux";
import { addTodo } from "../redux/action";

 export const Todo=()=>{
     const todos=useSelector((store)=>store.todos);
     const [text,setText]=useState('');
     const dispatch=useDispatch()
     const handleadd=()=>{
      dispatch(
        addTodo({
          title:text,
        })
      )
     }

  return (
      <div>
          <input type="text" onChange={(e)=>setText(e.target.value)} />
          <button onClick={handleadd}>add todo</button>
          {todos.map(t=> <div key={t.title}>{t.title}</div> )}
      </div>
  )

 };