import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Button } from './components/button'
import { Flex } from './components/flex'
function App() {
  const [count, setCount] = useState(0)
  const [them,setThem]=useState('dark')

  return (
    <div className="App">
      <h1>them is:{them}</h1>
      <Button them={them} >{"Click Me"}  </Button>
      
     <Button onClick={()=>{
       setThem(them=="light" ? "dark":"light")
     }}>Change the them</Button>

     {/* <Flex>
       <div>One</div>
       <div>Two</div>
       <div>Three</div>
     </Flex> */}

    </div>
  )
}

export default App
