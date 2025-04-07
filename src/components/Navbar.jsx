// import React from 'react'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-white py-4 px-8 shadow-lg'>
      <div className="logo">
        <span className='font-bold text-2xl tracking-wide'><img className="w-10 h-10 inline" src="/task.svg" alt="favicon" /> iTask</span>
      </div>
      <ul className="flex gap-10 text-lg">
        <li className='cursor-pointer hover:font-bold transition-all duration-300 ease-in-out transform hover:scale-110'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-300 ease-in-out transform hover:scale-110'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
