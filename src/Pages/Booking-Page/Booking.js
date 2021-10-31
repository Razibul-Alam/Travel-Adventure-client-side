import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import BookConfirm from './BookConfirm';
import { Card } from 'react-bootstrap';
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
    const {_id,title,img,descripton,price}=singleItem
    return (
        <div className='row justify-content-center align-items-center my-5'>
        <div className='col-lg-6 '>
          <div className='d-flex justify-content-center'>
          <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {descripton}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          <h5 className="text-success">Price: ${price}</h5>
          </div>
        </Card.Body>
        
      </Card> 
          </div>
        </div>
        <div className='col-lg-6'>
<BookConfirm info={singleItem}/>
        </div>
        </div>
    );
};

export default Booking;