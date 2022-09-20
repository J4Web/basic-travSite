import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import bookhotels from './assets/bookhotels.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';

function App() {
  return (
    <div className='app'>
   <Navbar/>
<section className='here-section'>
  <img className='hero__img' src={bookhotels}/>
  <div className='app__data'>
    <h1 className='app__header'>Welcome to Travel-Booking
    <h3 className='app__extra'>Your Trip Starts Here</h3>
    </h1>
    
  </div>

</section>
    </div>
  )
}

export default App
