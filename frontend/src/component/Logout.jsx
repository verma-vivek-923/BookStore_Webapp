import React from 'react'
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
import Login from './Login';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("users-login")
            toast.success("Logout Successfully")
            setTimeout(()=>{
                window.location.reload()
              },2000)
        } catch (error) {
            toast.error(err)
            setTimeout(()=>{},2000)
        }
    }
  return (
    <div>
      <button className='bg-red-500 text-sm text-white hover:bg-ted-300 px-4 py-1  md:px-6 py-2 rounded-md cursor-pointer'
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
