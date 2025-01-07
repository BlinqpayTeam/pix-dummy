"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { RefObject } from 'react'

type Props = {
  ref: RefObject<null>
  isVisible: boolean
}

const Features = ({ref, isVisible}: Props) => {
 
  return (
      <div id="qwid" ref={ref} className={`text-center text-white pt-20 overflow-hidden transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className='text-white bg-cardBg rounded-3xl flex justify-center items-center w-[62px] mb-8 h-[36px] mx-auto'>Qwid</div>
          <p className='text-white lg:text-[40px] text-[32px] font-medium w-[70%] lg:w-[45%] mx-auto'>Cross Border <br/>Payment Solution.</p>
          <p className='text-textColor lg:w-[23%] w-[90%] mt-2 mx-auto'>Make payments with multiple currencies across multiple countries, convert, hold, send and receive funds across borders in a few clicks.</p>
          <div className='text-darkGreen text-sm mt-6 flex justify-center items-center'>
              <Link href="https://qwid.io/" target='_blank'><p>visit our website</p></Link>
              <Image src="/images/chevron-right.svg" alt="chevron" width={14} height={14} />
          </div>
          <div className="flex justify-center items-center mb-20 mt-20 relative bg-[url('/images/feature.png')] h-[520px] bg-no-repeat bg-center bg-cover lg:bg-contain">
              {/* <Image src="/images/feature.svg" alt="feature" height={520} width={580} /> */}
              <div className='absolute h-[10px] w-full bottom-0 shadow-[0_0px_50px_70px_rgba(1,1,15,1)] border-solid border bg-darkBlue border-darkBlue'/>
          </div>
    </div>
  )
}

export default Features