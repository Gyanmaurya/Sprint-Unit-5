
import { useEffect, useState } from "react";
import {useDispatch ,useSelector } from "react-redux";
import { addTodo } from "../redux/Todos/action";

 export const Todo=()=>{
     const todos=useSelector((store)=>store.todos.todos,(pre,curr)=>{
       return false;
     });
     const [text,setText]=useState('');
     const dispatch=useDispatch()
     const handleadd=()=>{
      const payload={
        title:text,
      };
      fetch('http://localhost:8080/todos',{
        body: JSON.stringify(payload),
        headers:{
          "content-type":"application/json"
        },
        method:"POST"
      }).then(()=>setText('')).then(getData)
     }
  useEffect(()=>{
   getData()
  },[])
  const getData=()=>{
    fetch('http://localhost:8080/todos').then(x=>x.json()).then(data=>{
      dispatch(addTodo(data))
    })
  }


 console.log('ren')
  return (
      <div>
          <input value={text} type="text" onChange={(e)=>setText(e.target.value)} />
          <button onClick={handleadd}>add todo</button>
          {todos.map(t=> <div key={t.title}>{t.title}</div> )}
      </div>
  )

 };