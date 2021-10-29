import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SingleAdventure from './SingleAdventure';
const AllAdventures = () => {
    const[adventures,setAdventures]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/allEvents`)
        .then(res => {
          const allAdventure = res.data;
          console.log(allAdventure)
          setAdventures(allAdventure)
          
        })
    },[])
    return (
        <div>
           {adventures.map(adventure=><SingleAdventure key={adventure._id} adventure={adventure}/>)}
        </div>
    );
};

export default AllAdventures;