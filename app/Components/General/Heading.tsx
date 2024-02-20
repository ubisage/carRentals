import React from 'react'

const Heading = ({heading,subHeading}:{heading:string,subHeading:string}) => {
  return (
    <div className='flex flex-col items-center justify-center max-w-3xl'>
        <h1 className='font-bold text-5xl'>{heading}</h1>
        <h6>{subHeading}</h6>
    </div>
  )
}

export default Heading