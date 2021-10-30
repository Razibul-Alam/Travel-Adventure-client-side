import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SingleAdventure from './SingleAdventure';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';
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
        <Row xs={1} md={3} className="g-4">
           {adventures.map(adventure=><SingleAdventure key={adventure._id} adventure={adventure}/>)}
        </Row>
    );
};

export default AllAdventures;