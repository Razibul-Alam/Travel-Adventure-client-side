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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" readOnly defaultValue={user.email} {...register("email")} /> <br />
    <input type="text" readOnly defaultValue={user.displayName} {...register("name")} /> <br />
    <input type="text" placeholder="Address" {...register("Address")} /> <br />
    <input type="text" placeholder="Phone" {...register("phone", { required: true })} /> <br /> 
    {errors.exampleRequired && <span>This field is required</span>}
    <input type="submit" value="Book Confirm"/>
  </form>
        </div>
    );
};

export default BookConfirm;