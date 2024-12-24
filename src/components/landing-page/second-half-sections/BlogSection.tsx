import React from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { ChevronRight } from 'lucide-react'

const BlogSection = () => {

   const qwidBlogUrl = `${process.env.NEXT_PUBLIC_QWID_URL}/blog`

   return (
      <div className='bg-blq-custom-dark text-white py-5'>

         <div className="w-full lg:w-2/5 flex items-center justify-center lg:items-start flex-col">

            <SectionLabel text="Blog" />

            <p className="my-5 text-3xl leading-snug lg:text-4xl font-medium text-center lg:text-left">
               Curated Content, Just for You
            </p>

            <div className="text-blq-gray-300 text-plg lg:text-slg mb-5 text-center lg:text-left">
               The Blinqpay Blog features carefully sellected articles, topics, and discussions from both within and around the world of money and finance.
            </div>

            <a href={qwidBlogUrl} target="_blank" rel="noreferrer" className='text-white flex items-center text-sm lg:text-base'>
               View all&nbsp;
               <span>
                  <ChevronRight size="1rem" />
               </span>
            </a>
         </div>

         <div className="flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap pt-8 lg:pt-12">
            {[...Array(3)].map((item: number, idx: number) => {

               return (
                  <div key={idx} className="w-full lg:w-[32.5%] bred">

                     asdfasdf

                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default BlogSection