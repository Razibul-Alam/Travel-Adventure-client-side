import React from 'react';
import {Button,Card,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SingleAdventure = ({adventure}) => {
    const{_id,img,title,descripton,price}=adventure;
    return (
      <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {descripton}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
          <Link to={`/booking/${_id}`}><Button>Book Ticket</Button></Link>
          <h5 className="text-success">Price: ${price}</h5>
          </div>
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default SingleAdventure;