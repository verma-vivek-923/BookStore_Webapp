import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import list from "../../public/list.json";
import Card from "./Card"
import axios from "axios"



function Course() {
  const [book,setBook]=useState([])

  useEffect(()=>{
      const getBook=async()=>{
          try{
           let response= await axios.get("/book")
           console.log(response.data)
           setBook(response.data)
          }catch(error){
            console.log(error)
          }
      }
      getBook();
  },[])

    // console.log(list)
  return (
    <>
    <div className='mx-0 w-full max-w-screen-2x1 md:px-12 px-4 '>
      <div className='mt-12  items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl '>We're pleased to have you<span className='text-pink-500'> Here! :)</span></h1>
      </div>
      <div className='mt-12 grid grid-cols-2 md:grid-cols-5 md:px-16 text-xs '>
        {
            book.map((item)=>(
                <Card item={item} key={item.id}/>
                // <Card/>
          ))
        }
        
      </div>
    </div>
 </>
  )
}

export default Course
