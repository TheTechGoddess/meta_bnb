import React from 'react'
import group4028 from '../assets/Group4028.png'

const Home = () => {
  return (
    <div className='flex w-full justify-center md:justify-between mt-20 px-4 md:px-10 lg:px-24'>
        <div className='md:my-5'>
            <h1 className='text-4xl lg:text-5xl font-bold py-1 md:py-2 leading-snug'>Rent a <span className='text-[#a02279]'> Place</span> far away from </h1>
            <h1 className='text-4xl lg:text-5xl font-bold py-1 md:py-2 leading-snug tracking-wide'><span className='text-[#a02279]'>Home</span>  in the <span className='text-[#a02279] '>metaverse</span> </h1>
            <p className='text-xl md:text-2xl mt-10'>We provide you access to luxury and affordable houses</p>
            <p className='text-xl md:text-2xl tracking-wide'>in the metaverse, get a chance to turn your</p>
            <p className='text-xl md:text-2xl tracking-wide'>imagination to reality at your comfort zone</p>
            <div className='mt-10 w-full '>
              <input type="text" name="" id="" placeholder='Search for location' className='border border-gray-400 rounded-l-md px-3 py-2 w-[66%]'/>
              <button className='border bg-[#a02279] w-[34%] py-2 rounded-r-md'>Search</button>
            </div>
        </div>
        <div className='hidden md:flex'>
            <img src={group4028} alt="" className='w-full h-96 mr-10'/>
        </div>
    </div>
  )
}

export default Home