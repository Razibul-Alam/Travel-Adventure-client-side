import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const AboutUs = () => {
    return (
        <>
        <section className='row my-5'>
        <div className="col-lg-5">
            <h2>Why People Choices Us</h2>
        </div>
        <div className="col-lg-6">
        <ListGroup>
  <ListGroup.Item variant="primary"><span className="fs-2 mx-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>Safe Travel</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
  <span className="fs-2 mx-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>Good Support
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
  <span className="fs-2 mx-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>Excillent Co-operation
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
  <span className="fs-2 mx-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span> Awesome Travel
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
  <span className="fs-2 mx-2"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>Really Loyal
  </ListGroup.Item>
  <ListGroup.Item>
  <span className="fs-2 mx-2" variant="primary"><FontAwesomeIcon icon={faArrowAltCircleRight} /></span>Great opportunity
  </ListGroup.Item>
</ListGroup>
        </div>
        </section>
        </>
    );
};

export default AboutUs;