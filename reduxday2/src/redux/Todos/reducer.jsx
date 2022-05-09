

import {  Add_Todo} from "./actionTypes"

const iniState={
    
    todos:[],
}

const todoreducer=(state=iniState,{type,payload})=>{
   
 switch(type){
    
     case Add_Todo:return {...state,todos:payload};
     default: return state
 }
}
export {todoreducer};