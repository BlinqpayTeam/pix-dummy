'use client';
import React from 'react'
//import BlinqButton from '@/components/ui/BlinqButton';
//import useToolkit from '@/utils/hooks/useToolkit';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';


const ZapSection = () => {
   // const [email, setEmail] = useState('');
   // const { toastError, toastSuccess } = useToolkit();

   // const isValidEmail = (email: string) => {
   //    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   //    return emailRegex.test(email);
   // };

   // const handleSubscription = () => {
   //    if (!isValidEmail(email)) {
   //       toastError('Please enter a valid email')
   //    } else {
   //       toastSuccess('Dummy toast message')
   //    }
   // }


   return (
      <div className="w-full zap-section-overlay relative lg:bg-contain bg-no-repeat text-white">

         <div className="absolute top-20 lg:top-28 w-full mx-auto flexed flex-col">
            <SectionLabel text="ZAP" />

            <p className="my-5 lg:my-7 text-3xl leading-10 lg:leading-[50px] lg:text-[38px] font-medium text-center w-4/5 lg:w-2/5">
               Accept Payments Offline, Anywhere, Anytime
            </p>

            <div className="text-blq-gray-300 text-plg lg:text-slg mb-8 lg:mb-12 text-center lg:w-1/4">
               Never miss a sale! Whether you&#39;re in a bustling market, a remote village, or a pop-up shop, accept payments with ease. Our POS is designed to handle large transactions.
            </div>

            <div className="pt-12 lg:pt-32">
               <Image
                  alt="pos"
                  className='opacity-70 w-[300px] lg:w-[650px]'
                  src="/images/landing-page/zap-section/pos-terminal.svg"
                  height={470}
                  width={794}
               />
            </div>
         </div>

      </div>
   )
}

export default ZapSection