
import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center bg-dark text-light">
        <div className="col-md-4 offset-md-1">
            <h1 className='text-primary'>FEEL THE WORLD <br/>FROM HEART</h1>
            <p className="text-light">
               We are ready to fly with you.Book a ticket and fly with us.Also feel the earth from deep.
               We are ready to fly with you.Book a ticket and fly with us.Also feel the earth from deep.
            </p>
            <Link to ="/adventures"><button className="btn btn-primary">BOOK NOW</button></Link>
        </div>
        <div className="col-md-7">
            <img src='https://media.istockphoto.com/photos/plane-flying-picture-id504903829?k=20&m=504903829&s=612x612&w=0&h=jCuY4XojyzRpYKNrUTxxw5EAank_4frjqc2hSLW0USw=' alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default BannerItem;