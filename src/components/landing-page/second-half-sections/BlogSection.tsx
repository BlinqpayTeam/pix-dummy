/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { ChevronRight, Loader } from 'lucide-react'
import useBlog from '@/utils/hooks/useBlog'
import OptionalView from '@/components/ui/OptionalView';
import moment from 'moment';

const BlogSection = () => {
   const { fetchBlogs, blogs, blogsLoading, qwidBlogUrl } = useBlog();

   useEffect(() => {
      fetchBlogs();
      // eslint-disable-next-line
   }, [])

   return (
      <div className='bg-blg-dark-100 side-pad text-white py-5'>

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

         <OptionalView condition={blogsLoading}>
            <div className="py-8 flexed flex-col">
               <Loader className="text-white animate-spin" size="3.5rem" />
               <p className="text-white text-plg text-center mt-4">
                  Fetching Blogs
               </p>
            </div>

         </OptionalView>

         <OptionalView condition={!blogsLoading && blogs?.length > 0}>

            <div className="flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap pt-8 lg:pt-12">
               {blogs?.map((blog: QwidBlogType, idx: number) => {
                  const { image, title, author, readTime, createdAt, id, summary } = blog;

                  return (
                     <div key={idx} className="w-full lg:w-[32%] hover:scale-95 transition-all mb-14 lg:mb-0">

                        <img
                           src={image}
                           alt='blog-photo'
                           className='h-[220px] object-cover w-full rounded-lg'
                        />

                        <div className='py-4'>
                           <div className="flex items-start">

                              <div>
                                 <p className="mb-2 text-sm lg:text-slg">{author}</p>

                                 <p className="text-blq-gray-300 text-sm lg:text-slg flex items-center">
                                    {moment(createdAt).format('DD MMM, YYYY')}
                                    <span className='mx-2'><Bullet /></span>
                                    {readTime[0]} mins read
                                 </p>
                              </div>
                           </div>
                        </div>

                        <p className="font-medium text-lg lg:text-[20px]">
                           {title?.substring(0, 50)}...
                        </p>

                        <p className="text-blq-gray-300 text-sm lg:text-slg mt-3">
                           {summary?.substring(0, 105)}...
                        </p>

                        <a href={`${qwidBlogUrl}/${id}`} target="_blank" rel="noreferrer" className='text-white lg:text-blq-yellow-100 flex items-center text-sm lg:text-base mt-5'>
                           Read article&nbsp;
                           <span>
                              <ChevronRight size="1rem" />
                           </span>
                        </a>

                     </div>
                  )
               })}
            </div>
         </OptionalView>


      </div>
   )
}

const Bullet = () => (
   <svg width="3" height="2" viewBox="0 0 3 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.333252" width="2" height="2" rx="1" fill="#92939E" />
   </svg>

)

export default BlogSection