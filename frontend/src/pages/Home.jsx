import React, { useContext } from 'react'

import Navbar from '../components/Navbar';
import { userContext } from '../hooks/userContext';
import { Outlet } from 'react-router-dom';


const Home = () => {

  // const {val} = useContext(userContext)

  const username = localStorage.getItem('username')
    

  return (
    <>
    {
        username !== '' ? <h1 className=' font-bold text-center py-2'>Hi {username} 👋</h1> : <h1 className=' text-center py-2'>Hi guest user 👋</h1>
        // val !== '' ? <h1>Hi {val} 👋</h1> : <h1>Hi guest user 👋</h1>
    }
    
    {/* <h1 className=' text-center'>Welcome to Dashboard , after successfull user Authentication 🥳 !</h1> */}
    <Navbar />

    <Outlet />
    
    </>
  )
}

export default Home;