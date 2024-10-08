import React from 'react'

function Banner() {
  return (
      <>
      <div className="border-b border-pink-500 max-w-screen-2x1 bg-primary-content mx-auto  px-4 md:px-16 flex flex-col md:flex-row  ">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-8 md:mt-24">
        <div className='space-y-10'>
            <h1 className='text-4xl font-bold'>Hello,Welcome Here To Learn Something <span className='text-pink-500'>New Everyday !!!</span></h1>
           <p className='hidden md:block text-ms'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui excepturi nemo, veniam cum sint assumenda eaque consequatur esse sapiente dolor architecto repellat quis,
           </p>
        </div>
        <button className="bg-pink-700 hover:bg-pink-500 rounded-md border text-white hover:text-black px-4 py-1  duration-500 mt-3 mb-8">Get Start</button>
         </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 ">
          <img src="/Banner.png" className='w-68 mt-16 ' alt="#" />
        </div>
      </div>
      
      </>

  )
}

export default Banner
