import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { Counter } from './Components/Counter';
import { Todo } from './Components/Todos';

// import Store from './redux/Store';

function App() {
  

  return (
    <div className="App">
     <Counter/>
     <Todo/>
       
    </div>
  )
}

export default App
