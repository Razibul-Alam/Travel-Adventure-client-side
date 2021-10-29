import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
const Booking = () => {
    const[singleItem,setSingleItem]=useState({})
    const{bookingId}=useParams()
    console.log(bookingId,singleItem)
    useEffect(()=>{
        axios.get(`http://localhost:5000/singleItem/${bookingId}`)
        .then(res => {
          const item= res.data;
          setSingleItem(item[0])
          
        })
    },[])
    const {_id,title,img,description}=singleItem
    return (
        <div>
           <img src={img} alt="" />
           <h4>{title}</h4>
        </div>
    );
};

export default Booking;