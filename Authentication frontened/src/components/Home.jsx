import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Home = () => {
  const [loggedIndUser, setloggedIndUser] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    setloggedIndUser(localStorage.getItem('name'))
  }, []);

  const handleLoggedout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('jwtToken');
    setTimeout(() => {
      navigate('/login')
      toast.success("Logged Out Successfully")
    }, 2000)
  }

  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      <div>
        <h1 className='text-2xl font-extrabold'>Hello ,{loggedIndUser}</h1>
        <p className='text-gray-600'>Welcome to home page</p>
        <button
          type="button"
          className="w-full bg-gray-900 text-white py-4 rounded-lg mt-4 hover:bg-gray-600 focus:outline-none  "
          onClick={handleLoggedout}>
          Logged Out
        </button>
      </div>

    </div>
  )
}

export default Home
