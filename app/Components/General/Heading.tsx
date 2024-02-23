import React from 'react'

const Heading = ({heading,subHeading}:{heading:string,subHeading:string}) => {
  return (
    <div className='flex flex-col items-center justify-center  text-center  gap-3'>
        <h1 className='font-semibold text-5xl '>{heading}</h1>
        <h6 className = 'tracking-wide max-w-3xl opacity-95'>{subHeading}</h6>
    </div>
  )
}

export default Heading