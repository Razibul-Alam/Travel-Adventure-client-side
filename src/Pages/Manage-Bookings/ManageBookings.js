import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SingleBooking from './SingleBooking';
const ManageBookings = () => {
    const[bookings,setBookings]=useState([])
    useEffect(()=>{
        axios.get(`https://hidden-bayou-72012.herokuapp.com/allBookings`)
        .then(res => {
          const allBookings = res.data;
          console.log(allBookings)
          setBookings(allBookings)
          
        })
    },[])
    return (
        <div>
           {bookings.map(booking=><SingleBooking booking={booking}/>)}
        </div>
    );
};

export default ManageBookings;