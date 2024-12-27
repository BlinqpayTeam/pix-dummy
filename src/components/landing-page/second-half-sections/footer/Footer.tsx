import React from 'react'
import Addresses from './Addresses'
import UsefulLinks from './UsefulLinks'
import TermsAndPolicy from './TermsAndPolicy'

const Footer = () => {
   return (
      <footer className='w-full bg-blg-dark-100 pb-16 lg:pb-28 text-white font-creato side-pad'>
         <UsefulLinks />
         <Addresses />
         <TermsAndPolicy isMobile />
      </footer>
   )
}

export default Footer