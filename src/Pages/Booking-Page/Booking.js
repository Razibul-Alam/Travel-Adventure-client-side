import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import BookConfirm from './BookConfirm';
const Booking = () => {
    const[singleItem,setSingleItem]=useState({})
    const{bookingId}=useParams()
    console.log(bookingId,singleItem)
    useEffect(()=>{
        axios.get(`https://hidden-bayou-72012.herokuapp.com/singleItem/${bookingId}`)
        .then(res => {
          const item= res.data;
          setSingleItem(item[0])
          
        })
    },[])
    const {_id,title,img,description}=singleItem
    return (
        <div className='row justify-content-center align-items-center mt-5'>
        <div className='col-lg-6 '>
          <div className='d-flex justify-content-center'>
              <div>
              <img src={img} alt="" />
           <h4>{title}</h4>
              </div>
          </div>
        </div>
        <div className='col-lg-6'>
<BookConfirm info={singleItem}/>
        </div>
        </div>
    );
};

export default Booking;