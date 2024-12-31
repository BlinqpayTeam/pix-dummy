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

   const dummyBlogs = [
      {
         image: '/images/landing-page/blog-section/dummy-blog-1.png',
         title: 'The Future of Payments: How Fintech is Redefining Transactions',
         author: 'Bruce Wayne',
         readTime: '7',
         createdAt: '31st Dec, 2024',
         id: '18',
         summary: 'Fintech is revolutionizing how we send and receive money, making payments faster, safer, and more accessible. From instant cross-border remittances to seamless in-app checkouts, the convenience is unmatched. Discover how these innovations are shaping a cashless world and what it means for your business.',
      },
      {
         image: '/images/landing-page/blog-section/dummy-blog-2.png',
         title: 'Simplify Your Finances: The Rise of All-in-One Platforms',
         author: 'Bruce Wayne',
         readTime: '7',
         createdAt: '31st Dec, 2024',
         id: '48',
         summary: 'Managing multiple financial tools is a thing of the past. All-in-one platforms are empowering businesses and individuals with centralized solutions for payments, budgeting, and more. Learn how consolidating your financial tools can save time, reduce errors, and enhance productivity.',
      },
      {
         image: '/images/landing-page/blog-section/dummy-blog-3.png',
         title: 'Building Trust in Fintech: Why Security Comes First',
         author: 'Bruce Wayne',
         readTime: '7',
         createdAt: '31st Dec, 2024',
         id: '28',
         summary: 'In the digital economy, trust is non-negotiable. Fintech companies are leveraging advanced encryption, two-factor authentication, and compliance with global regulations to protect your data and transactions. Explore how these measures keep your money safe in an ever-evolving digital landscape.',
      },
   ]


   return {
      fetchBlogs,
      blogs,
      blogsLoading,
      qwidBlogUrl,
      dummyBlogs,
   }
}

export default useBlog;