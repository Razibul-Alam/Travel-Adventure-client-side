import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SingleAdventure from './SingleAdventure';
import { Row } from 'react-bootstrap';
const AllAdventures = () => {
    const[adventures,setAdventures]=useState([])
    useEffect(()=>{
        axios.get(`https://hidden-bayou-72012.herokuapp.com/allEvents`)
        .then(res => {
          const allAdventure = res.data;
          console.log(allAdventure)
          setAdventures(allAdventure)
          
        })
    },[])
    return (
        <>
        <div className='my-5'>
        <h2 className='text-center text-success'>Our Packages</h2>
        <hr className='m-auto text-danger bolder w-25'/>
        <Row xs={1} md={3} className="g-4 mt-3">
           {adventures.map(adventure=><SingleAdventure key={adventure._id} adventure={adventure}/>)}
        </Row>
        </div>
        </>
    );
};

export default AllAdventures;