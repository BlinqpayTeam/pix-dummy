/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect } from 'react';

const SimulateButton = () => {
   useEffect(() => {
      // Dynamically load the Blinqpay script
      const script = document.createElement('script');
      script.src = `https://demo-plugins.blinqpay.io/bundle.js?nocache=${new Date().getTime()}`;
      script.defer = true;
      document.body.appendChild(script);

      // Prepare payload and attach to window
      script.onload = () => {
         const payload = {
            publicKey: 'BLTSECK-6555efdda2de3899db1d37ba24761d5f',
            amount: '100.00',
            firstName: 'Blinqpay',
            lastName: 'User',
            country: 'Nigeria',
            state: 'Lagos',
            city: 'Lagos',
            zip: '38564',
            address: 'Address',
            email: 'blinqpayuser@blinqpay.io',
            countryCode: 'NG',
            paymentReference: `MST-${Math.floor(Math.random() * 1000000000 + 4)}`,
            phoneNo: '2348134327417',
            paymentDescription: 'Test transaction',
            currency: 'NGN',
            ipAddress: '192.145.118.85',
            callbackUrl: 'https://qwid.io',
            customerName: 'Blinqpay Customer',
            customerEmail: 'blinqpayuser@blinqpay.io',
            phoneNumber: '2348134327417',
         };

         // Global access to trigger payment
         (window as any).useBlinqpay = () => {
            (window as any).blinqpaySDK?.init({
               ...payload,
               onClose: () => console.log('Payment Closed'),
               onSuccess: (data: any) => console.log('Payment Success', data),
               onFailure: (data: any) => console.log('Payment Failed', data),
            });
         };
      };

      return () => {
         document.body.removeChild(script);
      };
   }, []);

   return (
      <form>
         {/* Hidden button you can trigger programmatically */}
         <button
            type="button"
            id="blq-btn"
            style={{ display: 'none' }}
            onClick={() => (window as any).useBlinqpay?.()}
         >
            Pay
         </button>
      </form>
   );
}


export default SimulateButton;