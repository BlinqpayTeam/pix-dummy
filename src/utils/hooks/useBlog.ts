'use client';
import { useState } from 'react'
import useToolkit from './useToolkit';

const useBlog = () => {
   const baseUrl = process.env.NEXT_PUBLIC_QWID_BLOG_BASE_URL;
   const qwidBlogUrl = `${process.env.NEXT_PUBLIC_QWID_URL}/blog`

   const { sendApiRequest, handleRequestError } = useToolkit();
   const [blogsLoading, setBlogsLoading] = useState(false)
   const [blogs, setBlogs] = useState([])

   const fetchBlogs = async () => {
      setBlogsLoading(true);
      try {
         const data = await sendApiRequest(`${baseUrl}active?perPage=100&page=1`, 'GET');

         const sortedItems = data?.posts?.sort((a: QwidBlogType, b: QwidBlogType) => {
            const dateA = new Date(parseInt(a.createdAt)).getTime();
            const dateB = new Date(parseInt(b.createdAt)).getTime();
            return dateA - dateB;
         });

         setBlogs(sortedItems?.slice(-3));
      } catch (error) {
         handleRequestError(error);
      }
      setBlogsLoading(false);
   };


   return {
      fetchBlogs,
      blogs,
      blogsLoading,
      qwidBlogUrl
   }
}

export default useBlog;