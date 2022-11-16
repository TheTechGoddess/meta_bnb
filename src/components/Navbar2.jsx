import React from 'react'
import btn from '../assets/locabtn.png'

const Navbar2 = () => {
  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4 md:px-10 lg:px-28 py-4 my-8'>
          {/* menu */}
      <ul className='hidden md:w-full md:flex md:justify-between'>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
        {/* <button className='border border-gray-400 px-4 py-1'>Location</button> */}
        <img src={btn} alt="" className='w-32' style={{marginTop:'-10px'}}/>
      </ul>
        <ul className='w-full grid grid-cols-4 gap-2 text-center md:hidden'>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
        {/* <button className='border border-gray-400 px-4 py-1'>Location</button> */}
        <img src={btn} alt="" className='w-40'/>
        </ul>
    </div>
  )
}

export default Navbar2