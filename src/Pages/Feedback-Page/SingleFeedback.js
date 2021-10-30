import React from 'react';
import {Card } from 'react-bootstrap';

const SingleFeedback =({feedback})=> {
    const{name,img,qoute}=feedback;
    return (
        <Card>
        <Card.Header>
            <div>
                <img src={img} alt="" />
            </div>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {qoute}{' '}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{name}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
};

export default SingleFeedback;