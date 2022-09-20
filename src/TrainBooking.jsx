import React from 'react'
import Navbar from './Navbar'
import train from './assets/train.jpg';
import './TrainBooking.css'
function TrainBooking() {
  return (
    <div>
        <Navbar/>
        <img src={train} className="train__bg"/>
    </div>
  )
}

export default TrainBooking