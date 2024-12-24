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
         const data = await sendApiRequest(`${baseUrl}active?perPage=3&page=1`, 'GET');
         setBlogs(data?.posts);
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

// const tampa = {
//    "title": "Sending money abroad from Nigeria: A simple 5-step guide with Qwid",

//    "author": "Beloved Moses",
//    "image": "https://vebuxe-assets.s3.eu-west-2.amazonaws.com/WhatsApp+Image+2023-08-24+at+6.19.22+PM.jpeg",
//    "readTime": "4 mins read time",
//    "summary": "For anyone in Nigeria looking to send money overseas, it can be a bit of a puzzle, whether it's for school fees, medical expenses.",
//    "status": "active",
//    "tags": [
//       "Personal Finance"
//    ],
//    "createdAt": "2023-08-24T12:01:21.859Z",
//    "updatedAt": "2023-08-24T12:01:21.859Z",
//    "version": 0,
//    "id": "64e74691eb8e584abc93153a"
// }