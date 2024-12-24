import React from 'react'
import Footer from './footer/Footer'
import NewsLetters from './NewsLetters'
import BlogSection from './BlogSection'


const SecondHalfSectionsWrapper = () => {
   return (
      <section className='w-full side-pad bg-blq-custom-dark'>

         <BlogSection />

         <div className="w-full bg-blq-custom-dark">
            <NewsLetters />
         </div>

         <Footer />
      </section>
   )
}

export default SecondHalfSectionsWrapper