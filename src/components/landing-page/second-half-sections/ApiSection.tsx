/* eslint-disable @next/next/no-img-element */
'use client';
import SectionLabel from '@/components/ui/SectionLabel'
import BlinqButton from '@/components/ui/BlinqButton';
import OptionalView from '@/components/ui/OptionalView';
import Link from 'next/link';

const ApiSection = () => {

   const apiShots = [
      '/images/landing-page/api-section/01.svg',
      '/images/landing-page/api-section/02.svg',
      '/images/landing-page/api-section/03.svg',
      '/images/landing-page/api-section/01.svg',
   ]

   return (
      <div id="apis" className='bg-blg-dark-200 text-white pb-20 pt-10 flex items-center justify-center flex-col side-pad'>

         <SectionLabel text="APIs" />

         <p className="my-5 lg:my-7 text-3xl leading-10 lg:leading-[50px] lg:text-[38px] font-medium text-center">
            Got a Startup Idea? <br /> We&#39;ve Got What You <br /> Need
         </p>

         <div className="text-blq-gray-300 text-plg lg:text-slg mb-8 lg:mb-12 text-center">
            Take your product to market faster by integrating our <br /> APIs to poser your own operations.
         </div>

         <Link href="https://docs.blinqpay.io/reference/introduction-1" target='_blank'><BlinqButton
            extraPadding
            text="Sign up"
         /></Link>

         <p className="w-4/5 lg:w-3/6 my-7 text-3xl lg:text-[38px] leading-10 lg:leading-[50px] font-medium text-center mt-20 lg:mt-12">
            Get the financial tools you need for your fintech startup when you plug-in to Blinqpay&#39;s API solutions. Accept payments and manage transactions without having to build from scratch.
         </p>


         <div className="flex items-center justify-center lg:justify-between flex-wrap pt-8 lg:pt-12 space-y-10 lg:space-y-20">
            {apiShots.map((item: string, idx: number) => {

               const allowButton = idx === 1 || idx === 2;

               return (
                  <div key={idx} className={`h-[300px] lg:h-[380px] w-full relative ${allowButton ? 'lg:w-[47%]' : 'lg:w-[53%]'}`}>

                     <img className='object-covers' src={item} alt='api-shot' />

                     <OptionalView condition={allowButton}>
                        <div className="mt-8">
                           <BlinqButton
                              whiteBg
                              extraPadding
                              text="Read API Docs"
                              className='!rounded-3xl'
                              onClick={() => window.open('https://docs.blinqpay.io', '_blank', 'noopener,noreferrer')}
                           />
                        </div>
                     </OptionalView>

                  </div>
               )
            })}
         </div>

      </div>
   )
}

export default ApiSection