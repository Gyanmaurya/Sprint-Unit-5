import { Add_Todo } from "./actionTypes"


 export const addTodo=(payload)=>{
    return{
        type:Add_Todo,
        payload
    }
      }