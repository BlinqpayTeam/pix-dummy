/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react'
import useToolkit from '@/utils/hooks/useToolkit';
import SectionLabel from '@/components/ui/SectionLabel';
import { ChevronRight } from 'lucide-react';


const ZapSection = () => {
   const [email, setEmail] = useState('');
   const { toastError, toastSuccess } = useToolkit();

   const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   };

   const handleSubscription = () => {
      if (!isValidEmail(email)) {
         toastError('Please enter a valid email')
      } else {
         toastSuccess('Dummy toast message')
      }
   }

   const zapShots = [
      '/images/landing-page/zap-section/zap-1.png',
      '/images/landing-page/zap-section/zap-2.png',
      '/images/landing-page/zap-section/zap-3.png',
      '/images/landing-page/zap-section/zap-4.png',
      '/images/landing-page/zap-section/zap-5.png',
   ]

   return (
      <div className="w-full zap-section-overlay relative lg:bg-contain bg-no-repeat text-white">

         <div className="absolute top-20 lg:top-28 w-full mx-auto flexed flex-col px-4 lg:px-0">
            <SectionLabel text="ZAP" />

            <p className="my-5 lg:my-7 text-3xl leading-10 lg:leading-[50px] lg:text-[38px] font-medium text-center w-4/5 lg:w-2/5">
               Accept Payments Offline, Anywhere, Anytime
            </p>

            <div className="text-blq-gray-300 text-plg lg:text-slg mb-8 lg:mb-12 text-center lg:w-1/4 px-8 lg:px-0">
               Never miss a sale! Whether you&#39;re in a bustling market, a remote village, or a pop-up shop, accept payments with ease. Our POS is designed to handle large transactions.
            </div>

            <div className="pt-8 lg:pt-40">
               <img
                  alt="pos"
                  className='opacity-70 w-[300px] lg:w-[650px]'
                  src="/images/landing-page/zap-section/pos-terminal.svg"
               />
            </div>


            <div className="w-full flexed flex-col mt-8 lg:mt-4">
               <p className="my-5 lg:my-7 text-3xl leading-10 lg:leading-[50px] lg:text-[38px] font-medium text-center w-4/5 lg:w-2/5">
                  Join our ZAP Waitlist
               </p>

               <p className="text-blq-gray-300 text-plg lg:text-slg text-center lg:w-[22%] px-8 lg:px-0">
                  Be among the first people to get a ZAP POS when we launch
               </p>

               <div className="bg-blq-dark-300 border border-gray-50 border-opacity-30 w-full lg:w-[27%] flex items-center mx-auto h-12 rounded-lg lg:relative px-2 mt-8 lg:mt-10">

                  <input
                     type="text"
                     value={email}
                     placeholder='Enter your Email Address'
                     onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setEmail(value)}
                     className='outline-none border-none active:outline-none text-blq-gray-300 placeholder:text-blq-gray-300 placeholder:text-sm placeholder:font-medium lg:pl-1 w-5/6 bg-transparent'
                  />

                  <button onClick={handleSubscription} className="text-white flex whitespace-nowrap text-xs">
                     Join Waitlist
                     <span className='ml-1'>
                        <ChevronRight size="1rem" />
                     </span>
                  </button>
               </div>

               <a href='#' target="_blank" rel="noreferrer" className='text-white lg:text-blq-yellow-100 flex items-center text-sm lg:text-base mt-5'>
                  Learn more&nbsp;
                  <span>
                     <ChevronRight size="1rem" />
                  </span>
               </a>
            </div>


            <div className="flex items-center justify-center lg:justify-between flex-wrap pt-8 lg:pt-14 side-pad">
               {zapShots.map((item: string, idx: number) => {

                  const wideDisplay = idx < 2;

                  return (
                     <div key={idx} className={`w-full hover:scale-95 transition-all
                     ${wideDisplay ? 'lg:w-[49%] mt-8 lg:mt-0' : 'lg:w-[32.5%] mt-8 lg:!mt-5'}`}>
                        <img
                           src={item}
                           alt='zap-shot'
                           className='w-full'
                        />
                     </div>
                  )
               })}
            </div>

         </div>
      </div>
   )
}

export default ZapSection