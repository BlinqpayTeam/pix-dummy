import React from 'react'
import Footer from './footer/Footer'
import NewsLetters from './NewsLetters'


const SecondHalfSectionsWrapper = () => {
   return (
      <section className='w-full'>

         <div className="w-full bg-blq-custom-dark">
            <NewsLetters />
         </div>

         <Footer />
      </section>
   )
}

export default SecondHalfSectionsWrapper