import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Col, Row, Toast, Button} from 'react-bootstrap';
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
import ToastMessage from '../Toast-message/ToastMessage';
const BookConfirm = ({info}) => {
    const [show, setShow] = useState(false);
    const [toastShow, setToastShow] = useState(true);
    const{title,descripton,img}=info
    const{user}=useAuth()
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        const bookingInfo={
            title:title,
            descripton:descripton,
            img:img,
            email:user.email, 
            name:user.displayName,
            status:'Pending'
        }
      axios.post('https://hidden-bayou-72012.herokuapp.com/addBooking',bookingInfo)
      .then(response =>{
        });
        setToastShow(true)
    }
    return (
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-4 rounded col-lg-8 col-sm-10 shadow">
         {/* <h2 className="text-center text-danger">Add product</h2> */}
       {/* { show&&<Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide>
        <h5 className="text-center text-danger">Welcome back </h5>
    </Toast>} */}
         <ToastMessage toastShow={toastShow} setToastShow={setToastShow}></ToastMessage>
            <form onSubmit={handleSubmit(onSubmit)}>
    <input className="form-control mt-3" type="text" readOnly defaultValue={user.email} {...register("email")} /> 
    <input className="form-control mt-3" type="text" readOnly defaultValue={user.displayName} {...register("name")} />
    <input className="form-control mt-3" type="text" placeholder="Address" {...register("Address")} />
    {errors.exampleRequired && <span>This field is required</span>}
    <input className="form-control mt-3" type="date" placeholder="Date" {...register("date", { required: true })} />
    <input className='form-control bg-primary mt-3' type="submit" value="Book Confirm"/>
  </form>
        </div>
        </div>
    );
};

export default BookConfirm;