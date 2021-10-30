import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SingleBooking from './SingleBooking';
import { Row } from 'react-bootstrap';
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
     // cancel booking
     const cancelBooking=(_id)=>{
        axios.delete(`https://hidden-bayou-72012.herokuapp.com/removeItem/${_id}`)
        .then((result) =>{if(result.data.deletedCount>0){
const remainingItems=bookings.filter(booking=>!booking._id==_id)
setBookings(remainingItems)
        }});
      }
    return (
        <div className='container w-75'>
        <Row xs={1} md={2} className="g-4">
           {bookings.map(booking=><SingleBooking booking={booking} cancelBooking={cancelBooking}/>)}
           </Row>
           </div>
    );
};

export default ManageBookings;