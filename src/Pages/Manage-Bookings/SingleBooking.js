import React,{useEffect} from 'react';
import {Button,Col,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';

const SingleBooking = ({booking,cancelBooking}) => {
    const{_id,img,title,descripton,status,name,from,date,ticket}=booking;
   
    // useEffect(()=>{
    //  cancelBooking(_id)
      
    // },[_id])
    // booking approve handle
    const approveBooking=(id)=>{
      const approval={status:'Approved',id:id}
axios.put('https://hidden-bayou-72012.herokuapp.com/updateStatus',approval)
.then((result)=>console.log(result))
    }
    return (
        <Col>
        <Card>
          <Card.Body className='text-center'>
           <Card.Title><span> {from}</span> to 
           <span> {title}</span> </Card.Title>
           <Card.Text className='text-danger'>
             Booked by {name}
            </Card.Text>
            <Card.Text className=''>
             Number of ticket {ticket}
            </Card.Text>
            <Card.Text className='text-primary'>
             Date: {date}
            </Card.Text>
            <Card.Text className='text-warning'>
             {status}
            </Card.Text>
            <Button className='me-2' onClick={()=>{approveBooking(_id)}}>Approve</Button>
            <Button onClick={()=>{cancelBooking(_id)}}>Cancel</Button>
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default SingleBooking;