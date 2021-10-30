import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from './../../Hooks/useAuth';
const BookConfirm = ({info}) => {
    const{title,descripton,img}=info
    const{user}=useAuth()
    const { register, handleSubmit,formState: { errors } } = useForm();
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
      .then(response => console.log(response));
    }
    return (
        <div className="mt-4 d-flex justify-content-center row">
         <div className="p-4 rounded col-lg-8 col-sm-10 shadow">
         {/* <h2 className="text-center text-danger">Add product</h2> */}
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