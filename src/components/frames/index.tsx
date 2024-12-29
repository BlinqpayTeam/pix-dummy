import Image from 'next/image'
import React from 'react'

const Frames = () => {
  return (
      <div className="flex flex-wrap lg:grid lg:grid-rows-2 grid-flow-col lg:gap-2 lg:w-[75%] mx-6 lg:mx-auto mb-5">
        <Image loading="lazy" src="/images/features/multiple-curriencies.svg" alt="multiple curriencies" width={389} height={304} />
        <Image loading="lazy" src="/images/features/transaction-confirmation.svg" alt="transaction confirmation" width={389} height={304} />
        <Image loading="lazy" src="/images/features/free-transfers.svg" alt="free transfers" width={389} height={304} />
        <Image loading="lazy" src="/images/features/exchange-rates.svg" alt="exchange rate" width={389} height={304} />
        <Image loading="lazy" src="/images/features/transparent-fees.svg" alt="transparent fees" width={389} height={304} />
        <Image loading="lazy" src="/images/features/accessibility.svg" alt="accessiblity" width={389} height={304} />
    </div>
  )
}

export default Frames