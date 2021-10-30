import React from 'react';
import {Button,Card,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SingleAdventure = ({adventure}) => {
    const{_id,img,title,descripton}=adventure;
    return (
      <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {descripton}
          </Card.Text>
          <Link to={`/booking/${_id}`}><Button>Book</Button></Link>
        </Card.Body>
        
      </Card>
    </Col>
    );
};

export default SingleAdventure;