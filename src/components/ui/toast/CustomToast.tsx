import { Toaster } from "sonner";
import { ErrorIcon, SuccessIcon } from "./ToastIcons";

const CustomToast = () => {
   return (
      <Toaster
         position="top-center"
         toastOptions={{
            unstyled: true,
            classNames: {
               toast: 'flex items-center font-inter relative p-2 pl-3 rounded-xl',
               title: 'text-white pt-px pl-1.5',
               error: 'bg-toast-red-100',
               success: 'bg-toast-green-100',
            },
         }}

         icons={{ success: <SuccessIcon />, error: <ErrorIcon /> }}
      />
   );
}

export default CustomToast