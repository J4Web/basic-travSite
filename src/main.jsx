import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FlightBooking from './FlightBooking';
import HotelBooking from './HotelBooking';
import TrainBooking from './TrainBooking';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="hotelBooking" element={<HotelBooking />} />
      <Route path="flightBooking" element={<FlightBooking />} />
      <Route path="trainBooking" element={<TrainBooking />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
