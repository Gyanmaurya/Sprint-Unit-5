

 const init={
     counter:0,
 };

 const AddCount={type:"AddCount",payload:1}

 const reducer=(store,{type,payload})=>{

switch(type){
    case "AddCount": return{counter:store.counter+payload}
    default:return store
}

 }

 class Store {
     constructor(reducer,init){
         this.reducer=reducer,
         this.store=init
     }
     getState(){
         return this.store;
     }
     dispatch(action){
        this.store= this.reducer(this.store,action)
     }

 }
 const store=new Store(reducer,init)
 store.dispatch(AddCount)
console.log(store.getState())
 store.dispatch(AddCount)
console.log(store.getState())