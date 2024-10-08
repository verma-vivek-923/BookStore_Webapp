import React from 'react'
import Course from '../component/course'
import Footer from '../component/footer'
import Navbar from '../component/navbar'


function Courses() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>
        <Course/>
   </div>
   <Footer/>
   
   </>
  )
}

export default Courses
