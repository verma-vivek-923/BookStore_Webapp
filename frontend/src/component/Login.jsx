import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-hot-toast';


function Login() {
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit =async (data) =>{
    const userInfo={
      email:data.email,
      password:data.password
    }
    await axios.post("/users/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("Loged In Successfull")
         toast.success('Loged In Successfull !');
        document.querySelector("#my_modal_3").close();
        setTimeout(()=>{
          window.location.reload()
          localStorage.setItem("users-login",JSON.stringify(res.data.findUser))
        },1000)
      }
    }).catch((err)=>{
        console.log(err)
        if(err.response){
          // alert("Error : "+err.response.data.message)
          toast.error("Error : "+err.response.data.message);
          setTimeout(()=>{},2000)
        }
    })
  }
  
  return (
    <>
    <div className=' '>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn hidden" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal ">
  <div className="modal-box  shadow-md  ">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>{
        document.querySelector("#my_modal_3").close()
      }}
      >✕</Link>
  
    <h3 className="font-bold text-2xl text-black">Log In</h3>
    <div className='space-y-2 mt-4 px-6 '>
        <label className='text-black '>Email: </label><br></br>
        <input 
        type="email" placeholder='Enter Your Email' autoComplete="off" className='w-full  bg-transparent  px-4 py-2 outline-none border-2 border-blue-700 rounded-md'
        {...register("email", { required: true })} /><br/>
        {errors.email && <span className=' text-xs text-red-500'>*This field is required</span> }
    </div>
    <div className='space-y-2 mt-4 px-6'>
        <label className='text-black'>Password: </label><br></br>
        <input  
        type="password" placeholder='Enter Your Password' autoComplete="off" className='w-full  bg-transparent  px-4 py-2 outline-none border-2 border-blue-700 rounded-md'
        {...register("password", { required: true })}/><br/>
         {errors.email && <span className=' text-xs text-red-500'> *This field is required</span> }
    </div>
    <div className='flex flex-col md:flex-row md:justify-betweenpx-6 mt-6'>
        <button onClick=""  className='bg-pink-700 hover:bg-pink-500 rounded-md border text-white hover:text-black  duration-500 px-4 mx-5 py-1'>Log In</button>
        <p className='flex justify-center ml-auto mr-6 mt-4 md:mt-1'>Not Resister Yet ?<Link to="/signup" className='text-blue-500 no-underline hover:underline cursor-pointer'
        onClick={()=>{
          document.querySelector("#my_modal_3").close()
        }}> Sign Up</Link> </p>
    </div>
  </form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login
