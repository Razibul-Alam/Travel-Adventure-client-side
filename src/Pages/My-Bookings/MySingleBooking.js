import React from 'react';
import {Button,Card,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const MySingleBooking = ({booking}) => {
    const{_id,img,title,descripton,status}=booking;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} className='img-fluid' />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {descripton}
            </Card.Text>
            <Card.Text className='text-warning'>
             {status}
            </Card.Text>
            <Button className='me-2'>Approve</Button>
            <Button>Cancel</Button>
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default MySingleBooking;