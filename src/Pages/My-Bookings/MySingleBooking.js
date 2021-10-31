import React from 'react';
import {Button,Card,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const MySingleBooking = ({booking,cancelBooking}) => {
    const{_id,img,title,descripton,status,date,ticket,from,name}=booking;
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
          <Button onClick={()=>{cancelBooking(_id)}}>Cancel</Button>
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default MySingleBooking;