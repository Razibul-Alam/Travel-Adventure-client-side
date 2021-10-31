import React from 'react';
import AboutTop from './AboutTop';
import AboutUs from './AboutUs';

const AboutMain = () => {
    return (
        <div className='container my-4'>
             <div className='my-5'>
        <h2 className='text-center text-success'>About us</h2>
        <hr className='m-auto text-primary w-25'/>
        </div>
           <AboutTop/>
           <AboutUs/>
           
          
        </div>
    );
};

export default AboutMain;