// import { legacy_createStore as createStore } from "redux";
// const Add_count='ADD_COUNT';
// const Add_todos="TODOS";
//  const reducer=(Store,action)=>{
//      switch(action.type){
//          case Add_count:return{...Store,counter:Store.counter+action.payload};
//          case Add_todos:return{...Store,todos:[...Store.todos,action.payload]};
//          default:return Store;
//      }
    
//  };
//  const addtodos=(title)=>{
//  return {
//      type:Add_todos,
//      payload:{title:title}
//  }
//  };
//  const initState={
//      counter:0,
//      todos:[],
//      theme:'dark'
//  };
//  const Store=createStore(reducer,initState);
 

 

//  Store.dispatch({type:Add_count,payload:1});

//  Store.dispatch(addtodos("World Class Web series"));

//  console.log(Store.getState());
// export default Store;

import { legacy_createStore as createStore,combineReducers } from "redux";
import { Countreducer } from "./Counter/Counterreducer"; 
import { todoreducer } from "./Todos/reducer";
const rootReducer=combineReducers({
    Counter:Countreducer,
    todos:todoreducer
})
export const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.subscribe(()=>{
//     console.log('store',store.getState())
// })
console.log(store.getState())
//{Counter:1,todos:[]}
//+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()