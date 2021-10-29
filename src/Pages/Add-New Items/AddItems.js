import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddItems = () => {
    const [imgUrl,setImgUrl]=useState('')
    const [uploading,setUploading]=useState(false)
    const { register, handleSubmit,formState: { errors } } = useForm();
 
    const onSubmit = data =>{
        const info={
            title:data.title,
            descripton:data.description,
            img:imgUrl
        }
      axios.post('http://localhost:5000/addItem',info)
      .then(response => console.log(response));
    }
  
    // image upload
    const handleFile=(e)=>{
        const fileInfo=e.target.files
      const imgData=new FormData()
      imgData.set("key","cd8b0025cccd4015a70e149fd2ab8ad0")
      imgData.append("image",fileInfo[0])
      setUploading(true)
      axios.post('https://api.imgbb.com/1/upload',imgData)
          .then(response =>{setImgUrl(response.data.data.url)
          setUploading(false)});
      }
      console.log(imgUrl)
    const productImageRegister = register("productImage", {required: true})
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" defaultValue="" {...register("title")} />
    <input type="text" {...register("description", { required: true })} />
    <input className="form-control"
       type="file"
       {...productImageRegister }
       onChange={e => {
           productImageRegister.onChange(e);
           handleFile(e);
       }} />
    {errors.exampleRequired && <span>This field is required</span>}
    {uploading?<p>Uploading....</p>:<input type="submit" />}
  </form>
    );
};

export default AddItems;