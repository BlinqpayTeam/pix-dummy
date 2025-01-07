/* eslint-disable @next/next/no-img-element */
'use client';
import SectionLabel from '@/components/ui/SectionLabel'
import BlinqButton from '@/components/ui/BlinqButton';
import { ChevronRight } from 'lucide-react';

const CheckoutSection = () => {

   return (
      <div id="blinqCheckout" className='bg-blg-dark-200 text-white pb-16 flex items-center justify-center flex-col side-pad'>

         <SectionLabel text="Blinq Checkout" />

         <p className="my-5 lg:my-7 text-3xl leading-10 lg:leading-[50px] lg:text-[38px] font-medium text-center">
            Accept Payments Globally
         </p>

         <div className="text-blq-gray-300 text-plg lg:text-slg mb-8 lg:mb-12 text-center lg:w-2/5">
            Whether you are a small business owner, an NGO, a start-up, or multinational, acept payments in multiple currencies wherever you are in the world with our smart checkout system.
         </div>

         <div className="flexed">
            <BlinqButton
               extraPadding
               text="Sign up"
            />

            <a href='#' target="_blank" rel="noreferrer" className='text-white ml-5 flex items-center text-sm lg:text-base'>
               Learn more&nbsp;
               <span>
                  <ChevronRight size="1rem" />
               </span>
            </a>
         </div>

         {/* PC */}
         <div className="w-full relative pt-10 lg:pt-24 hidden lg:block">
            <div className="relative">
               <img
                  alt="checkout-shot"
                  src="/images/landing-page/checkout-section/checkout-section-img.svg"
               />

               <div className="bg-blg-dark-200 absolute py-8 flexed flex-col bottom-[280px] left-[47%] transform -translate-x-[47%]">
                  <p className="mb-1.5 font-medium lg:text-xl">Checkout with ease</p>
                  <p className="mb-0 text-xs text-blq-gray-300">Everything your business needs to accept payments and more</p>
               </div>
            </div>
         </div>

         {/* mobile */}
         <div className="w-full relative pt-16 lg:hidden">
            <div className="relative">
               <img
                  alt="checkout-shot"
                  src="/images/landing-page/checkout-section/checkout-section-img-mobile.svg"
               />

               <div className="bg-blg-dark-200 absolute text-center flexed flex-col bottom-[220px] left-1/2 transform -translate-x-1/2">
                  <p className="mb-1.5 font-medium text-sm">Checkout with ease</p>
                  <p className="mb-0 text-xs text-blq-gray-300">Everything your business needs to accept payments and more</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CheckoutSection