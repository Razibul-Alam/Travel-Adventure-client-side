import React,{useState,useEffect} from 'react';
import axios from 'axios';
import SingleBooking from './SingleBooking';
import { Row } from 'react-bootstrap';
import ModalMessage from '../Modal-Message/ModalMessage';
const ManageBookings = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
    const[bookings,setBookings]=useState([])
    useEffect(()=>{
        axios.get(`https://hidden-bayou-72012.herokuapp.com/allBookings`)
        .then(res => {
          const allBookings = res.data;
          // console.log(allBookings)
          setBookings(allBookings)
          
        })
    },[bookings])
     // cancel booking
     const cancelBooking=(_id)=>{
       const confirmDelete=window.confirm('Are you sure? Do you want to remove?')
       if(confirmDelete){
        axios.delete(`https://hidden-bayou-72012.herokuapp.com/removeItem/${_id}`)
        .then((result) =>{if(result.data.deletedCount>0){
const remainingItems=bookings?.filter(booking=>!booking._id==_id)
handleShow()
setBookings(remainingItems)
        }});
       }
      }
    return (
      <>
      <ModalMessage show={show} setShow={setShow} message={'Succesfully deleted'} />
        <div className='container w-75 my-5'>
          <h2 className='text-center text-danger mb-4'>The number of Bookings {bookings?.length}</h2>
        <Row xs={1} md={2} className="g-4">
           {bookings?.map(booking=><SingleBooking booking={booking} cancelBooking={cancelBooking}/>)}
           </Row>
           </div>
           </>
    );
};

export default ManageBookings;