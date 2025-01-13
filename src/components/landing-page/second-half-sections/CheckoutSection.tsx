/* eslint-disable @next/next/no-img-element */
'use client';
import SectionLabel from '@/components/ui/SectionLabel'
import BlinqButton from '@/components/ui/BlinqButton';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
           <Link href="https://checkout-dash.blinqpay.io/login" target="_blank"> <BlinqButton
               extraPadding
               text="Sign up"
            /></Link>

            <a href='#' target="_blank" rel="noreferrer" className='text-white ml-5 flex items-center text-sm lg:text-base'>
               Learn more&nbsp;
               <span>
                  <ChevronRight size="1rem" />
               </span>
            </a>
         </div>

         <div className="w-full relative pt-24 hidden lg:flexed">
            <img
               alt="checkout-shot"
               className='w-max'
               src="/images/landing-page/checkout-section/checkout-section-img.svg"
            />
         </div>

         <div className="w-full relative pt-16 lg:hidden flexed">
            <img
               alt="checkout-shot"
               src="/images/landing-page/checkout-section/checkout-section-img-mobile.svg"
            />
         </div>
      </div>
   )
}

export default CheckoutSection