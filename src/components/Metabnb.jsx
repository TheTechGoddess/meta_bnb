import React from 'react'
import boxes from '../assets/3boxes.png'

const Metabnb = () => {
  return (
    <div className='md:flex md:flex-row-reverse w-full py-16 justify-center md:justify-between mt-20 px-4 md:px-10 lg:px-24 bg-[#A02279] text-[#FFFFFF] content-center'>
        
        <div className='text-center object-center flex justify-center content-center pb-16 md:pb-0'>
            <img src={boxes} alt="" className='w-80 md:w-[600px] self-center' />
        </div>
        {/* mobile view */}
        <div className='flex flex-col md:hidden justify-center content-center text-center'>
        <h1 className='text-5xl font-extrabold pb-10 '>Metabnb NFTs</h1>
            <p className='text-lg px-8 mb-12 '>
            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our excluysive services.
            </p>
            <button className='bg-white text-[#A02279] px-4 w-[150px] py-2 self-center'>Learn more</button>
        </div>
        <div className='hidden md:flex mt-20 flex-col justify-center content-center text-start'>
            <h1 className='text-5xl font-extrabold pb-10 '>Metabnb NFTs</h1>
            <p className='text-lg tracking-wide'>Discover our NFT gift cards collection. Loyal </p>
            <p className='text-lg tracking-wide'>customers gets amazing gift cards which are</p>
            <p className='text-lg tracking-wide'>traded as NFTs. These NFTs gives our customer</p>
            <p className='text-lg mb-12 tracking-wide'>access to loads of our excluysive services</p>
            <button className='bg-white text-[#A02279] px-4 w-[150px] py-2 self-center md:self-start'>Learn more</button>
        </div>
    </div>
  )
}

export default Metabnb