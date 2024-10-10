import React from 'react'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import FreeBook from '../component/FreeBook'
import Navbar from '../component/navbar'

function Home() {
  return (
    <>
    <div className=''>

   <Navbar/>
    <Banner/>
    {/* <FreeBook/> */}
    <Footer/>
    </div>
    </>
  )
}

export default Home
