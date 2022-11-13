import React, {useState} from 'react'
import logo_house from '../assets/Vectorhouse.png'
import logo from '../assets/Vectorlogo.png'
import {FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    
    <div className='w-full h-[80px] flex justify-between items-center px-10 md:px-10 lg:px-28 py-4 mt-4'>
        <div className='flex'>
          <img src={logo_house} alt="" className='w-8' />
          <img src={logo} alt="" className='w-24'  />
        </div>
        {/* menu */}
        <div>
          <ul className='hidden md:flex'>
            <li className='px-6 text-lg'>Home</li>
            <li className='px-6 text-lg'>Place to stay</li>
            <li className='px-6 text-lg'>NFTs</li>
            <li className='px-6 text-lg'>Community</li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className='px-2 py-2 bg-[#A02279] rounded-lg'>
            Connect Wallet
          </button>
        </div>
        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars className='text-2xl text-[#a02279]' /> : <FaTimes className='text-2xl text-[#a02279]' />}
        </div>  
        {/* mobile */}
          <ul className={!nav ? 'hidden' : 'absolute w-[180px] h-[300px] flex flex-col justify-center items-center top-20 left-80 bg-[#947db5] rounded-2xl '}>
            <li className='px-6 py-2 text-lg hover:text-[#a02279]'>Home</li>
            <li className='px-6 py-2 text-lg hover:text-[#a02279]'>Place to stay</li>
            <li className='px-6 py-2 text-lg hover:text-[#a02279]'>NFTs</li>
            <li className='px-6 py-2 text-lg hover:text-[#a02279]'>Community</li>
            <button className='flex  px-2 py-2 bg-[#A02279] rounded-lg mt-2 hover:bg-[#ea5ebd]'>
            Connect Wallet
          </button>
          </ul>
    </div>
  )
}

export default Navbar