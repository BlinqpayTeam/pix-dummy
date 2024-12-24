import React from 'react'
import { addresses } from './exports'
import Image from 'next/image'
import OptionalView from '@/components/ui/OptionalView'

const Addresses = () => {
   return (
      <div className="w-full flex items-start justify-start flex-wrap">
         {addresses.map((address: FooterAddressProps, idx: number) => {

            const isSocials = address?.title?.includes('Social')
            const isNig = address?.title === 'Nigeria'

            return (
               <div key={idx} className="w-full lg:w-[28%] flex !items-start lg:mr-12 mb-8 lg:mb-8">

                  <div className={`mr-3 ${isNig ? '' : 'pt-px'}`}>
                     <Image
                        height={20}
                        alt="footer-img"
                        width={isNig ? 35 : 25}
                        src={address.iconPath}
                     />
                  </div>

                  <div>
                     <p className="mb-1 text-white pb-1 font-semibold">{address.title}</p>

                     <OptionalView condition={!isSocials}>
                        <p className="text-sm lg:text-plg text-blq-gray-50 font-normal">{address.value}.</p>
                     </OptionalView>

                     <OptionalView condition={isSocials}>
                        <div className="flex items-center flex-wrap lg:flex-nowrap justify-between">

                           {address.children?.map(({ subtitle, url }: FooterLinkProps) => (

                              <a key={subtitle} href={url} target="_blank" rel="noreferrer" className='w-[30%] lg:w-max mb-3 lg:mr-4'>

                                 <div className="flex items-center">
                                    <span className="text-blq-gray-50 text-sm lg:text-plg">{subtitle}</span>

                                    <Image
                                       alt='arrow'
                                       width={20}
                                       height={20}
                                       src='/images/footer/footer-link-arrow.svg'
                                    />
                                 </div>
                              </a>

                           ))}
                        </div>
                     </OptionalView>
                  </div>

               </div>
            )
         })}
      </div>
   )
}

export default Addresses