import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Col, Row, Toast, Button} from 'react-bootstrap';
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import ToastMessage from '../Toast-message/ToastMessage';
const BookConfirm = ({info}) => {
    // const [show, setShow] = useState(false);
    const [toastShow, setToastShow] = useState(false);
    const{title,descripton,img}=info
    const{user}=useAuth()
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        
        // console.log(data)
        const bookingInfo={
            title:title,
            descripton:descripton,
            img:img,
            email:user.email, 
            name:user.displayName,
            status:'Pending',
            date:data.date,
            ticket:data.ticket,
            from:data.from,
        }
      axios.post('https://hidden-bayou-72012.herokuapp.com/addBooking',bookingInfo)
      .then(response =>{
          if(response.data.insertedId){
            reset()
            setToastShow(true)
          }
        });
        
        
    }
    return (
        <>
        <h5 className="text-center mb-3"><span className="text-danger">{user?.displayName}</span> please confirm your booking</h5>
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-4 rounded col-lg-8 col-sm-10 shadow">
        <ToastMessage toastShow={toastShow} setToastShow={setToastShow}></ToastMessage>
            <form onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control mt-3" type="text" readOnly defaultValue={user?.email} {...register("email")} /> 
    <input className="form-control mt-3" type="text" readOnly defaultValue={user?.displayName} {...register("name")} />
    <input className="form-control mt-3" type="text" placeholder="From-place" {...register("from")} />
    <input className="form-control mt-3" type="number" placeholder="No of Ticket" {...register("ticket")} />
    {errors.exampleRequired && <span>This field is required</span>}
    <input className="form-control mt-3" type="date" placeholder="date" {...register("date", { required: true })} />
    <input className='form-control bg-primary mt-3' type="submit" value="Confirm Book"/>
  </form>
        </div>
        </div>
        </>
    );
};

export default BookConfirm;