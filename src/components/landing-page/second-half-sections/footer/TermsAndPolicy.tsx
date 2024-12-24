import React from 'react'

type Props = {
   isMobile?: boolean
}

const TermsAndPolicy = ({ isMobile }: Props) => {
   return (
      <div className={`w-full border-gray-50 
      ${isMobile ? 'lg:hidden flex flex-col justify-center items-center space-y-10 border-t border-opacity-40 pt-8' : 'hidden lg:flex items-center border-y py-14 justify-between border-opacity-15 mb-20'}`}>

         <p className="text-blq-gray-50 hover:scale-[90%] cursor-pointer transition-all duration-300 text-sm lg:text-plg">
            Terms of Service
         </p>

         <p className="text-white text-sm lg:text-plg">
            &copy;&nbsp;{new Date().getFullYear()} Blinqpay &nbsp;&nbsp;&nbsp; All Rights Reserved
         </p>

         <p className="text-blq-gray-50 hover:scale-[90%] cursor-pointer transition-all duration-300 text-sm lg:text-plg">
            Privacy Policy
         </p>
      </div>
   )
}

export default TermsAndPolicy