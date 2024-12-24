/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react'
import BlinqButton from '@/components/ui/BlinqButton';


const NewsLetters = () => {
   const [email, setEmail] = useState('');

   const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   };

   const handleSubscription = () => {
      // 
   }


   return (
      <div className='relative text-white flex items-center justify-center flex-col font-creato side-pad h-[450px] lg:h-[800px]'>

         <img
            className='absolute'
            style={{ height: '100%', width: '100%' }}
            src="/images/landing-page/newsletter-bg.png" alt="newsletters-bg"
         />

         <div className="z-20">

            <div className="text-center pb-7 lg:pb-10">
               <p className="mb-3 text-3xl leading-snug lg:text-3xl font-semibold">
                  Sign Up For Our Newsletters
               </p>

               <p className="text-white lg:text-lg lg:w-3/5 mx-auto">
                  Stay up-to-date as you receive latest news, blogs, events, success stories, and more from Blinqpay.
               </p>
            </div>

            <div className="bg-white w-full lg:w-[55%] flex items-center mx-auto h-12 rounded-lg lg:relative px-2">

               <input
                  type="text"
                  value={email}
                  placeholder='Enter your Email Address'
                  onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setEmail(value)}
                  className='outline-none border-none active:outline-none text-blq-gray-100 placeholder:text-blq-gray-100 placeholder:text-sm lg:pl-1 w-5/6'
               />

               <div className="hidden lg:block">
                  <BlinqButton
                     text="Sign Up"
                     disabled={!isValidEmail(email)}
                     onClick={handleSubscription}
                  />
               </div>
            </div>

            <div className="w-full lg:hidden mt-5">
               <BlinqButton
                  fullWidth
                  text="Sign Up"
                  disabled={!isValidEmail(email)}
                  onClick={handleSubscription}
               />
            </div>
         </div>

      </div>
   )
}

export default NewsLetters