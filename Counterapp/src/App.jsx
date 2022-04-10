// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { Details } from './components/name';

function App() {
  //  const [variableName,FunctionName]=useState
    const [counter,setCounter]=useState(0);
    const handle=(value)=>{
      
      setCounter(counter+value)
    };
    const multi=(value)=>{
      
      setCounter(counter*value)
    };
  return (
    <div className="App">
     <h1>Counter:{counter}</h1>
     <button onClick= {()=>handle(1)}>Add</button>
      
     <button onClick={()=>handle(-1)}>Sub</button>
     <button onClick={()=>multi(2)}>Mult</button>
     <div className={`${counter%2===0 ? "Even":"Odd"}`}>Number is {counter%2===0 ? "Even":"odd"}</div>
      
    </div>
  );
}

export default App;
//{data.map(e=> <Details nam={e.name} age={e.age} /> )}
// const data=[
  //{name:"rohit",age:"1"},
  //{name:"rohyyit",age:"17"},
  //{name:"rohuuit",age:"88"},
  
//];