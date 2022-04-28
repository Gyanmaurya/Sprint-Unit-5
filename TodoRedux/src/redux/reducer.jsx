
//IT IS A FUNCTION WHICH is takes states and action

import { ADD_COUNT, Add_Todo, REDUCE_COUNT } from "./actionTypes"

 const iniState={
     Counter:1,
 }

 const reducer=(state=iniState,{type,payload})=>{
    
  switch(type){
      case ADD_COUNT: return{...state,Counter:state.Counter+payload};
      case REDUCE_COUNT:return {...state,Counter:state.Counter-payload};
      case Add_Todo:return {...state,todos:[...state.todos,payload]};
      default: return state
  }
 }
 export {reducer};