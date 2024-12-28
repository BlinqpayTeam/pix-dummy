"use client"
import React from 'react'
//import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import Marquee from "react-fast-marquee";

type Props = {
    banks: Array<string>
}

const Slider = ({ banks }: Props) => {
   
  return (
      <div className='flex justify-center items-center py-[50px]'>
           <Marquee>
        {banks.map((bank, index) => (
          <div key={index} className='mx-12'>
                <div className="flex text-white">
                    <Image src={`/images/countries/${bank.replaceAll(' ', '-').toLowerCase()}.svg`} alt={bank} width={24} height={24} /> 
                <p className='text-xl font-medium ml-2'>{bank}</p>
            </div>
          </div>
        ))}
    </Marquee>
   </div>
  )
}

export default Slider