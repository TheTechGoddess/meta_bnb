import React from 'react'
import boxes from '../assets/3boxes.png'

const Metabnb = () => {
  return (
    <div className='flex w-full py-10 justify-center md:justify-between mt-20 px-4 md:px-10 lg:px-24 bg-[#A02279]'>
        <div></div>
        <div>
            <img src={boxes} alt="" />
        </div>
    </div>
  )
}

export default Metabnb