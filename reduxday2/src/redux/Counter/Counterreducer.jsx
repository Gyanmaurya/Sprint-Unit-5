

import { ADD_COUNT, REDUCE_COUNT } from "./CounteractionTypes"

const iniState={
    Counter:1,
    
}

const Countreducer=(state=iniState,{type,payload})=>{
   
 switch(type){
     case ADD_COUNT: return{...state,Counter:state.Counter+payload};
     case REDUCE_COUNT:return {...state,Counter:state.Counter-payload};
     
     default: return state
 }
}
export {Countreducer};