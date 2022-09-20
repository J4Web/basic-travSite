import React from 'react'
import Navbar from './Navbar'
import flight from './assets/flight.jpg'
import './FlightBooking.css'
function FlightBooking() {
  return (
    <div>
        <Navbar/>
        <img src={flight} className="flight__bg"/>

    </div>
  )
}

export default FlightBooking