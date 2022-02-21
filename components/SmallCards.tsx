import React from 'react'
import Image from 'next/image'

interface data{
    img : string,
    location:string,
    distance:string
  }

const SmallCards = ({img, location, distance} : data) => {
  return (
    <div className='flex items-center m-2 mt-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-75 ease-out'>
        {/**left */}
            <div className='relative h-16 w-16'>
                <Image src={img}
                layout="fill" className='rounded-lg'/>
            </div>

         {/**right */}
         <div>
             <h2>{location}</h2>
             <h3 className='text-gray-500'>{distance}</h3>
         </div>
    </div>
  )
}

export default SmallCards
