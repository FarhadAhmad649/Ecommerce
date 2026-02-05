import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='flex items-center justify-center text-xl font-medium gap-2 text-black'>
        <p className='text-gray-600'>{text1}</p>
        <p className='font-bold'>{text2}</p>
        <div className='h-[1px] w-8 bg-gray-600'></div>
    </div>
  )
}

export default Title