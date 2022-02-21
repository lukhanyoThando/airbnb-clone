import React from 'react'
import Image from 'next/image'

interface data{
  img : string,
  title: string
}

export const MediumCard = ({img, title}:data) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={img} layout="fill" className='rounded-xl'/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}
