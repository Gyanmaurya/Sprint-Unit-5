import { useState } from 'react';
import {Navbar} from './components/Navbar';
import {Routes,Route} from "react-router-dom"

import './App.css'
import { Home } from './components/Home';
import { Catagory } from './components/Catagory';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Product } from './components/Product';
import { Footer } from './components/footer';
import { FQA } from './components/FQA';
import { Job } from './components/job';
import { SocialMedia } from './components/social';
import { ProductDetail} from './components/Product Details';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img className='Banner' src="https://static.vecteezy.com/system/resources/thumbnails/002/216/694/small/shopping-trendy-banner-vector.jpg" alt="" />
      <Navbar ></Navbar>
      <Routes  >
      <Route  path='/' element={<Home/>} ></Route>
      <Route  path='/catagory' element={<Catagory/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/products' element={<Product/>} ></Route>
      <Route path='/fqa' element={<FQA/>} ></Route>
      <Route path='/job' element={<Job/>} ></Route>
      <Route path='/social' element={<SocialMedia/>} ></Route>
      <Route path='/product/:id' element={<ProductDetail/>} ></Route>

      </Routes>
      
      <Footer></Footer>
 

    </div>
  )
}

export default App
