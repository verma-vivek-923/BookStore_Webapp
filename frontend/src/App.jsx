import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './component/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
    <> 
   <div >
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
