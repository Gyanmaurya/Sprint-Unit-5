import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

    const [counterbooks,setCounterbook]=useState(5);
    const [counternotebooks,setCounternotebook]=useState(4);
    const [counterpens,setCounterpen]=useState(9);
   
  
   function bookfuns(value){
    if(counterbooks<=0){
      return setCounterbook(0)
    }
    return setCounterbook(counterbooks+value)
   }
   function bookfun(value){
   
    return setCounterbook(counterbooks+value)
   }
   
   function notefun(value){
     
    return setCounternotebook(counternotebooks+value)
   }
   function notefuns(value){
     if(counternotebooks<=0){
      return setCounternotebook(0)
     }
    return setCounternotebook(counternotebooks+value)
   }
   function penfun(value){
    // if(counterpens<=0){
    //   return;
    // }
   
    return setCounterpen(counterpens+value)
   }
   function penfuns(value){
    if(counterpens<=0){
      return setCounterpen(0);
    }
   
    return setCounterpen(counterpens+value)
   }
   

  

  return (
    <div className="App">
      <div className='app1'>
      <div>
        <h1>Total_Books:{counterbooks}</h1>
        <button onClick={()=>bookfun(1)}>Add Books</button>
        <button onClick={()=>bookfuns(-1)}>Remove Books</button>
      </div>
      <div>
        <h1>Total_Pens:{counterpens}</h1>
        <button onClick={()=>penfun(1)}>Add Pen</button>
        <button onClick={()=>penfuns(-1)}>Remove Pen</button>
      </div>
      <div>
        <h1>Total_noteBooks:{counternotebooks}</h1>
        <button onClick={()=>notefun(1)}>Add noteBooks</button>
        <button onClick={()=>notefuns(-1)}>Remove noteBooks</button>
      </div>
      </div>
      <div>
         
        <h1>Total_Inventory:{counternotebooks+counterpens+counterbooks}</h1>
      </div>
     
    </div>
  );
}
//{counter%2===0 ? "Even":"odd"}
export default App;
