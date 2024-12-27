import React from 'react'
import Footer from './footer/Footer'
import NewsLetters from './NewsLetters'
import BlogSection from './BlogSection'
import ApiSection from './ApiSection'
import ZapSection from './ZapSection'


const SecondHalfSectionsWrapper = () => {
   return (
      <section className='w-full'>
         <ZapSection />

         <ApiSection />

         <BlogSection />

         <div className="w-full bg-blg-dark-100">
            <NewsLetters />
         </div>

         <Footer />
      </section>
   )
}

export default SecondHalfSectionsWrapper