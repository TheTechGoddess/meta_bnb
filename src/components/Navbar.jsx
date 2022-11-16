import React, {useState} from 'react'
import logo_house from '../assets/Vectorhouse.png'
import logo from '../assets/Vectorlogo.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import gthan from '../assets/Vectorgthan.png'
import {FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const [modal, setModal] = useState(false)
  const handleModal = () => setModal(!modal)
  return (
    // <div className={!modal ? 'bg-white' : 'bg-[#C6C6C6]'}>
      <div className='w-full h-[80px] flex justify-between items-center px-4 md:px-10 lg:px-28 py-4 mt-4 '>
        <div className='flex'>
          <img src={logo_house} alt="" className='w-8' />
          <img src={logo} alt="" className='w-24'  />
        </div>
        {/* menu */}
        <div>
          <ul className='hidden lg:flex'>
          <li className='px-6 text-lg hover:text-[#a02279]'><Link to="/">Home</Link></li>
            <li className='px-6 text-lg hover:text-[#a02279]'><Link to="/places">Place to stay</Link></li>
            <li className='px-6 text-lg'>NFTs</li>
            <li className='px-6 text-lg'>Community</li>
          </ul>
        </div>
        <div className='hidden lg:flex'>
          <button onClick={handleModal} className='px-2 py-2 bg-[#A02279] rounded-lg'>
            Connect Wallet
          </button>
        </div>
        {/* modal */}
        <div className={!modal ?'hidden':'absolute transform h-full -translate-x-1/2 translate-y-1/3 w-full bg-[rgb(0,0,0,0.5)] text-black left-[50%] flex justify-center'}>
          <div className='w-[400px] h-[240px] bg-white mt-44 md:mt-56 flex flex-col self-center rounded-lg'>
          <div className='flex justify-between px-4 py-3'>
            <h1>Connect Wallet</h1>
            <FaTimes onClick={handleModal} className='hover:cursor-pointer'/>
          </div>
          <hr className='border bg-zinc-400' />
          <div className='p-4'>
            <p className='text-sm mb-4'>Choose your preferred wallet:</p>
            <button className='w-full border border-1 flex rounded-lg px-5 my-3 py-1 justify-between'>
              <div className='flex'>
              <img src={icon1} alt="" className='w-10' />
              <p className='px-3 mt-2'>Metamask</p> 
              </div>
              <img src={gthan} alt="" className='mt-3'/>
            </button>
            <button className='w-full border border-1 flex rounded-lg px-6 my-3 py-2 justify-between'>
              <div className='flex'>
              <img src={icon2} alt="" className='w-8'/>
              <p className='px-4 mt-1'>WalletConnect</p>
              </div>
              <img src={gthan} alt="" className='mt-2'/>
            </button>
          </div>
          </div>
          
        </div>
        {/* hamburger */}
        <div onClick={handleClick} className='lg:hidden z-10'>
            {!nav ? <FaBars className='text-2xl text-[#a02279]' /> : <FaTimes className='text-2xl text-[#a02279]' />}
        </div>  
        {/* mobile */}
          <ul onClick={handleClick} className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#947db5] flex flex-col justify-center items-center'}>
          <li className='px-6 py-4 text-xl hover:text-[#a02279]'><Link to="/">Home</Link></li>
            <li className='px-6 py-4 text-xl hover:text-[#a02279]'><Link to="/places">Place to stay</Link></li>
            <li className='px-6 py-4 text-xl hover:text-[#a02279]'>NFTs</li>
            <li className='px-6 py-4 text-xl hover:text-[#a02279]'>Community</li>
            <button onClick={handleModal} className='flex  px-2 py-4 bg-[#A02279] rounded-lg mt-2 hover:bg-[#ea5ebd] text-xl md:text-lg'>
            Connect Wallet
          </button>
          </ul>
    </div>
    // </div>
    
  )
}

export default Navbar