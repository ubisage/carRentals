'use client';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeaderAnimation = () => {
  return (
    <div>
    <div>We provide best services for</div>
<TypeAnimation
preRenderFirstString={true}
sequence={[
  700,
  'Cab Services', // initially rendered starting point
  700,
  'Car Rentals',
  700,
  'Bike Rentals',
  500,
]}
speed={50}
className='text-3xl sm:text-5xl font-bold'
repeat={Infinity}
/>
</div>
  )
}

export default HeaderAnimation