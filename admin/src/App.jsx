import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { useState } from 'react'
import Login from './components/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'

export const backendUrl = 'http://localhost:4000'
//  export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency='₹'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {
        token === ''
          ? <Login setToken={setToken} />
          : <>
            <Navbar setToken={setToken} />
            <hr />
            <div className='flex w-full '>
              <Sidebar />
              <div className='w-[70%] mx-auto ml-[max(tvw,25px)] my-8 text-gray-60 0 text-base'>
                <Routes>
                  <Route path='/add' element={<Add token={token}/>} />
                  <Route path='/list' element={<List token={token} />} />
                  <Route path='/orders' element={<Orders token={token} />} />
                </Routes>
              </div>
            </div>
          </>
      }

    </div>
  )
}

export default App
