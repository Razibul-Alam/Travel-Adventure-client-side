import React,{useState,useEffect} from 'react';
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import MySingleBooking from './MySingleBooking';
const MyBookings = () => {
    const[myBookings,setMyBookings]=useState([])
    const{user}=useAuth()
    useEffect(()=>{
        axios.get(`https://hidden-bayou-72012.herokuapp.com/getBookingsByEmail?email=${user.email}`)
        .then(res => {
          const allBookings = res.data;
          console.log(allBookings)
          setMyBookings(allBookings)
          
        })
    },[])
    return (
        <div>
           {myBookings?.map(booking=><MySingleBooking booking={booking}/>)}
        </div>
    );
};

export default MyBookings;