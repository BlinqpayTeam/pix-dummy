import React from 'react'

type Props = {
   text: string
}

const SectionLabel = ({ text }: Props) => {
   return (
      <div className='bg-blq-gray-400 text-white font-creato font-medium w-max px-4 py-2.5 rounded-3xl flex items-center justify-center text-sm lg:text-base'>
         {text}
      </div>
   )
}

export default SectionLabel