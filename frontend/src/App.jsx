import React from 'react'
import Home from './home/home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/courses'
import Navbar from './component/navbar'
import Signup from './component/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
    <> 
    {/* <Home/> */}
   <div >
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup" />}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
   </div>

   </>
  )
}

export default App
