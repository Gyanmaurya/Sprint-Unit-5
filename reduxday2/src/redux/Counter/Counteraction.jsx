

  // createde
  //action is function which is return obj and takes key(which is called type) like payload 

import { ADD_COUNT, REDUCE_COUNT } from "./CounteractionTypes"


 
  export const addCount=(payload)=>{
    return{
        type:ADD_COUNT,
        payload
    }
      }
      export const reduceCount=(payload)=>{
    return{
        type:REDUCE_COUNT,
        payload
    }
      }