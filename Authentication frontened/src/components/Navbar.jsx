import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='h-16 bg-slate-900 flex  text-white items-center gap-16 px-4 text-lg '>
        <li><img src="/img/logo.png" alt="logo"  className='h-10'/></li>
        <li className='hover:border-b-2 '>Home</li>
        <li className='hover:border-b-2 '>Product</li>
        <li className='hover:border-b-2 '>Contact</li>
        <li className='hover:border-b-2 '>About Us</li>
      </ul>
    </div>
  )
}

export default Navbar    
