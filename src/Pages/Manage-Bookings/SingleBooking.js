import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const SingleBooking = ({booking}) => {
    const{_id,img,title,descripton}=booking;
    return (
        <div>
          <img src={img} alt=""/>  
          <h3>{title}</h3>
          <p>{descripton}</p>
          <Link to={`/booking/${_id}`}><Button>Book</Button></Link>
        </div>
    );
};

export default SingleBooking;