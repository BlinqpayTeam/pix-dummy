import Image from 'next/image'
import Link from 'next/link'
import React, { RefObject } from 'react'


type Props = {
  ref: RefObject<null>
  isVisible: boolean
}

const DownloadSection = ({ref, isVisible}: Props) => {
  return (
      <div ref={ref} className={`text-center mt-[120px] mb-[80px] transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className='text-[40px] font-medium text-white'>Download Qwid</p>
          <p className='text-base font-normal text-textColor mb-[24px]'>Available on the App Store and Play Store</p>
          <div className='flex justify-center items-center'>
              <Link href="https://apps.apple.com/us/app/qwid/id6444584444" target='_blank'><div className='mr-6'>
                  <Image src="/images/app-store.svg" alt="download app store" width={120} height={40} />
        </div>
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=io.blinqpay.qwid" target='_blank'>
              <div>
                  <Image src="/images/google-store.svg" alt="download play store" width={120} height={40} />
          </div>
          </Link>
          </div>
    </div>
  )
}

export default DownloadSection