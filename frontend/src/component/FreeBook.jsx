import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';


function FreeBook() {
  
  const [book,setBook]=useState([])

  useEffect(()=>{

    const getBook=async()=>{
        try{
          let res=await axios.get("/book")
          
          setBook(res.data)
          // console.log(res.data)
        }catch(error){
          console.log(error)
        }
    }
    getBook();
  },[])
  

    let filterData=book.filter((data)=>data.category==="free");
    // console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

  return (
    <>
    <div className='mx-0 w-full  max-w-screen-2*1 md:px-12 px-8 mt-4'>
    <div>
    <h1 className='text-2xl font-semibold'>Free Offered Books</h1>  
    </div>
    <div>
    <div className="slider-container  md:px-16 px-0 text-xs">
      <Slider {...settings}>
        {filterData.map((item)=>(
           <Card item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </div>
    </>
  )
}

export default FreeBook
