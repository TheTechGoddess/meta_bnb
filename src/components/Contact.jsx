import React from 'react'
import house2 from '../assets/house2.png'
import logo2 from '../assets/logo2.png'
import copyright from '../assets/copyright.png'
import {FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'


const Contact = () => {
  return (
    <div className='flex w-full py-10 justify-between px-4 md:px-10 lg:px-24 bg-black text-[#FFFFFF] content-center'>
        <div className=''>
            <div className='flex mb-20'>
                <img src={house2} alt="" className='w-8' />
                <img src={logo2} alt="" className='w-24' />
            </div>
            <div className='flex mb-7'>
                <FaFacebookF className=' text-sm'/>
                <FaInstagram className='ml-4 text-sm'/>
                <FaTwitter className='ml-4 text-sm'/>
            </div>
            <div className='flex'>
                <img src={copyright} alt="" />
                <p className='ml-3'>2022 Metabnb</p>
            </div>
        </div>
        <div>
            <p className='font-bold pb-4'>Community</p>
            <p className='text-sm py-1'>NFT</p>
            <p className='text-sm py-1'>Tokens</p>
            <p className='text-sm py-1'>Landlords</p>
            <p className='text-sm py-1'>Discord</p>
        </div>
        <div>
            <p className='font-bold pb-4'>Places</p>
            <p className='text-sm py-1'>Castle</p>
            <p className='text-sm py-1'>Farm</p>
            <p className='text-sm py-1'>Beach</p>
            <p className='text-sm py-1'>Learn more</p>
        </div>
        <div>
            <p className='font-bold pb-4'>About us</p>
            <p className='text-sm py-1'>Road map</p>
            <p className='text-sm py-1'>Creators</p>
            <p className='text-sm py-1'>Career</p>
            <p className='text-sm py-1'>Contact us</p>
        </div>
    </div>
  )
}

export default Contact