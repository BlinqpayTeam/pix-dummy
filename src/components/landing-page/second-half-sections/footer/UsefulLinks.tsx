import Image from 'next/image'
import React from 'react'
import { footerUsefulLinks } from '../exports'
import TermsAndPolicy from './TermsAndPolicy'
import Link from 'next/link'

const UsefulLinks = () => {
   return (
      <div id="aboutUs" className="w-full">

         <div className='w-full flex items-start justify-start lg:justify-between flex-wrap lg:flex-nowrap py-14'>

            <div className="w-full lg:w-[30%]">
               <Image src="/logo/blinqpay.svg" alt="logo" width={82} height={18} />

               <p className="mb-0 text-justify mt-3 text-sm lg:text-plg text-blq-gray-50 lg:pr-4">
                  Blinqpay is a global financial technology company with the aim to be a one-stop shop for individuals and businesses that need to make payments either online or in-person. We offer online payment solutions on both web and mobile platforms.
               </p>
            </div>

            <div className="w-full lg:w-[40%] flex items-start justify-between flex-wrap lg:flex-nowrap pt-10 lg:pt-0">
               {footerUsefulLinks.map(({ title, children }: UsefulLinkProps) => {

                  return (
                     <div key={title} className="w-[45%] lg:w-[23%] mb-8 lg:mb-0">
                        <span className="text-white font-semibold">
                           {title}
                        </span>

                        <div className='mt-5 flex flex-col'>
                           {children?.map(({ subtitle, url, target }: FooterLinkProps) => {

                              return (
                                 <Link href={url} target={target || '_self'} key={subtitle} className="text-blq-gray-50 text-sm lg:text-plg mb-4 hover:scale-110 transition-transform cursor-pointer w-max">
                                    {subtitle}
                                 </Link>

                              )
                           })}
                        </div>
                     </div>
                  )

               })}
            </div>

         </div>

         <TermsAndPolicy />
      </div>

   )
}

export default UsefulLinks