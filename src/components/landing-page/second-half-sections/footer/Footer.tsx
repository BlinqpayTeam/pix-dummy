import React from 'react'
import Addresses from './Addresses'
import UsefulLinks from './UsefulLinks'
import TermsAndPolicy from './TermsAndPolicy'

const Footer = () => {
   return (
      <footer className='w-full bg-blq-custom-dark pb-16 lg:pb-28 text-white side-pad font-creato'>
         <UsefulLinks />
         <Addresses />
         <TermsAndPolicy isMobile />
      </footer>
   )
}

export default Footer