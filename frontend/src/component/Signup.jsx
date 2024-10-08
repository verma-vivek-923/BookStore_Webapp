import React from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form";
import axios from "axios"
import { toast } from 'react-hot-toast';

function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit =async (data) =>{
    const userInfo={
      name:data.name,
      email:data.email,
      password:data.password,
      cpassword:data.cpassword
    }
    await axios.post("/users/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("Sign Up Successfull")
        navigate(from,{ replace:true })
        toast.success("Sign Up Successfull !");
      }
      localStorage.setItem("users-signin",JSON.stringify(res.data.createdUser))
    }).catch((err)=>{
        console.log(err)
        if(err.response){
          // alert("Error : "+err.response.data.message)
          toast.error("Error : "+err.response.data.message+'!');
         
        }
    })
  }
  
  return (
    <>
    <div className='h-screen py-0 bg-primary-content'>
    <div id="my_modal_2" className=" flex justify-center items-center h-screen">
  <div className="modal-box ">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-2xl">Sign Up</h3>
    <div className='space-y-2 mt-4 px-6'>
        <label>Name: </label><br></br>
        <input type="text" placeholder='Enter Your Name' autoComplete="off" className='w-full bg-transparent px-4 py-2 outline-none border border-blue-700  rounded-md'
        {...register("name", { required: true })} /><br/>
        {errors.name && <span className=' text-xs text-red-500'>*This field is required</span> }
    </div>
    <div className='space-y-2 mt-4 px-6'>
        <label>Email: </label><br></br>
        <input type='email' placeholder='Enter Your Email' autoComplete="off" className='w-full bg-transparent px-4 py-2 outline-none border border-blue-700 rounded-md'
        {...register("email", { required: true })} /><br/>
        {errors.email && <span className=' text-xs text-red-500'>*This field is required</span> }
    </div>
  
    <div className='space-y-2 mt-4 px-6'>
        <label>Password: </label><br></br>
        <input type='password' placeholder='Enter Your Password' autoComplete="off" className='w-full bg-transparent px-4 py-2 outline-none border border-blue-700 rounded-md'
        {...register("password", { required: true })} /><br/>
        {errors.password && <span className=' text-xs text-red-500'>*This field is required</span> }
    </div>
    <div className='space-y-2 mt-4 px-6'>
        <label>Confirm Password: </label><br></br>
        <input type='password' placeholder='Enter Your Password Again' autoComplete="off" className='w-full bg-transparent px-4 py-2 outline-none border border-blue-700 rounded-md'
        {...register("cpassword", { required: true })} /><br/>
        {errors.password && <span className=' text-xs text-red-500'>*This field is required</span> }
    </div>
    <div className='flex flex-col md:flex-row md:justify-between px-6 mt-6'>
        <button type="submit" className='bg-pink-700 hover:bg-pink-500 rounded-md border  text-white hover:text-black  duration-500 px-4 py-1'>Sign In</button>
        <p className='flex justify-center mt-4 md:mt-1'>Already have an account ? <a  className='text-blue-500  no-underline hover:underline cursor-pointer'
        onClick={()=>{
          document.querySelector("#my_modal_3").showModal()
          console.log("hello")
        }      }
        > Log In</a> </p>
    </div>
        </form><Login/>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
