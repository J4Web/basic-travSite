import React,{setState, useState} from 'react'
import {Link} from 'react-router-dom';
import data from './Data';
import './HotelBooking.css'
import Navbar from './Navbar';
function HotelBooking() {
const [time,setTime]=useState(data);
const [showMsg,setShowMsg]=useState(false);
const [ending,setEndingTime]=useState("");
const [starting,setStartingTime]=useState("");
const [isOverlap,setOverlap]=useState(false);

const  handleClick= (e)=>
{
    e.preventDefault();
    for(let i=0; i<time.length; i++){
        if(time[i].timeS===starting && time[i].timeE===ending){
            let book={
                timeS:starting,
                timeE:ending,
                booked:true
            }
            data.push(book);
            setTime(data);
            console.log(time)
            setOverlap(true);
            break;
        }
    }
    setShowMsg(true);
}
const handleReload=()=>{
    // location.reload(); 
    window.location.replace('/');
}
  return (
    <div>
<Navbar/>
<div className='hotel__form'>
<form>
  <div className="form-group">
    <label htmlFor="text">Check-In:</label>
    <input type="email" className="form-control" id="To-Time"  aria-describedby="To-Time" placeholder="To"  onChange={(e)=> setStartingTime(e.target.value)} required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Check-Out:</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="From" onChange={(e)=> setEndingTime(e.target.value)} required />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>

<button  type="button" className="btn btn-primary" onClick={handleReload}>Check Another Room</button>
</form>
<section className='hotel__data'>
    {showMsg && (isOverlap? <h1>Sorry the room is not available</h1> : <h1>Room is Available Book here : <button type="button" className="btn btn-success">Book Now</button></h1>)}

    </section>
</div>
  
    
    </div>
  )
}

export default HotelBooking


