import React,{useState,useEffect} from 'react';
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import MySingleBooking from './MySingleBooking';
import { Row } from 'react-bootstrap';
import ModalMessage from '../Modal-Message/ModalMessage';
const MyBookings = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const[myBookings,setMyBookings]=useState([])
    const{user}=useAuth()
    useEffect(()=>{
        axios.get(`https://hidden-bayou-72012.herokuapp.com/getBookingsByEmail?email=${user?.email}`)
        .then(res => {
          const allBookings = res.data;
        //   console.log(allBookings)
          setMyBookings(allBookings)
          
        })
    },[myBookings])
    // cancel booking
    const cancelBooking=(_id)=>{
        const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
        if(confirmDelete){
         axios.delete(`https://hidden-bayou-72012.herokuapp.com/removeItem/${_id}`)
         .then((result) =>{if(result.data.deletedCount>0){
 const remainingItems=myBookings?.filter(booking=>!booking._id==_id)
 handleShow()
 setMyBookings(remainingItems)
         }});
        }
       }
    return (
        <>
        <ModalMessage show={show} setShow={setShow} message={'Succesfully deleted'} />
        <div className='container w-75 my-5'>
            <h2 className='text-center text-danger mb-5'>The number of bookings {myBookings?.length}</h2>
            <Row xs={1} md={3} className="g-4">
           {myBookings?.map(booking=><MySingleBooking booking={booking} cancelBooking={cancelBooking}/>)}
           </Row>
        </div>
        </>
    );
};

export default MyBookings;