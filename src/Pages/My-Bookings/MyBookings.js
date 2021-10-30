import React,{useState,useEffect} from 'react';
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import MySingleBooking from './MySingleBooking';
import { Row } from 'react-bootstrap';
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
        <div className='container w-75'>
            <Row xs={1} md={3} className="g-4">
           {myBookings?.map(booking=><MySingleBooking booking={booking}/>)}
           </Row>
        </div>
    );
};

export default MyBookings;