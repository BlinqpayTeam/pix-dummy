import Image from 'next/image'
import React, { RefObject } from 'react'

type Props = {
  ref: RefObject<null>
  isVisible: boolean
}

const Partner = ({ref, isVisible}: Props) => {
 
  return (
    <div id="partners" ref={ref} className={`text-center mt-[100px] transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className='lg:w-[35%] w-[90%] mx-auto'>
          <p className='lg:text-[40px] text-[24px] font-bold text-white'>The Safest Payment Gateway For You and Your Business.</p>
          <p className='text-sm font-normal text-textColor mb-20 mt-4'>Safe, easy, and trusted payments for you and your business. We make every transaction smooth and secure.</p>
       </div>
          <div className='flex justify-around mb-10 lg:w-[50%] lg:mx-auto'>
              <Image src="/images/halo.svg" alt="halo" width={73} height={34} />
              <Image src="/images/ohentpay.svg" alt="ohentpay" width={160} height={34} />
              <Image src="/images/clearer.svg" alt="clearer" width={66} height={40} />
              <Image src="/images/media.svg" alt="media" width={60} height={40} />
          </div>
          <p className='text-base font-bold text-textColor'>Our Partners</p>
    </div>
  )
}

export default Partner