import React, { useState,useEffect } from 'react';
import SingleFeedback from './SingleFeedback';

const AllFeedBack = () => {
    const[feedbacks,setFeedbacks]=useState([])
    useEffect(()=>{
        fetch('./Feedback.json')
        .then(res=>res.json())
        .then(data=>setFeedbacks(data))
          },[])
    return (
        <>
        <div className='my-5'>
        <h2 className='text-center text-success'>What Tourist says</h2>
        <hr className='m-auto text-primary w-25'/>
        </div>
        <div className='container'>
            {feedbacks?.map(feedback=><SingleFeedback key={feedback.id} feedback={feedback} />)}
        </div>
        </>
    );
};

export default AllFeedBack;