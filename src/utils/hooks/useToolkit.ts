/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { toast } from 'sonner'

const useToolkit = () => {

   type MethodTypes = 'GET' | 'POST' | 'PUT';

   const toastError = (message: string) => toast.error(message)
   const toastSuccess = (message: string) => toast.success(message)

   const baseURL = process.env.VITE_APP_SHIGA_ASSETS_BASE_URL;
   const firebaseAuthKey = process.env.VITE_APP_FIREBASE_AUTH_KEY;

   const handleRequestError = (error: any) => {
      const message = error?.response?.data?.message || error?.message;
      const messageIsArray = Array.isArray(message)

      if (typeof message === 'string') toastError(message);

      else if (messageIsArray) {
         message?.map((message: string) => toastError(message))
      } else {
         return Promise.reject(error);
      }
   }

   // const axiosInstance = axios.create({
   //    headers: { 'Content-Type': 'application/json', },
   // });

   // axiosInstance.interceptors.request.use(
   //    (request) => request,

   //    (error) => Promise.reject(error)
   // );

   // axiosInstance.interceptors.response.use(
   //    (response) => response,

   //    (error) => handleRequestError(error)
   // );

   const sendApiRequest = async (url: string, method: MethodTypes, data = {}, headers = {}) => {
      const baseURL = url;

      const config = {
         baseURL,
         url: '',
         method,
         data,
         headers: { 'Content-Type': 'application/json', ...headers },
      };

      try {
         const response = await axios(config);
         return response.data;
      } catch (error) {
         handleRequestError(error)
      }
   };


   return {
      toastSuccess,
      toastError,
      sendApiRequest,
      handleRequestError,
      baseURL,
      firebaseAuthKey
   }
}

export default useToolkit