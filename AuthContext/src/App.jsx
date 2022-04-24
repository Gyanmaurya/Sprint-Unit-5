import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from "./Components/Navbar";
import { Body } from "./Components/Body/Card"

function App() {

  return (
    <div className="App">
     <Navbar/>
     <Body></Body>
    </div>
  )
}

export default App
