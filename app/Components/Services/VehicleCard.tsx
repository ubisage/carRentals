import CarTravelled from '@/public/GeneralIcons/CarTravelled'
import FuelTypeIcon from '@/public/GeneralIcons/FuelTypeIcon'
import GearIcon from '@/public/GeneralIcons/GearIcon'
import PersonsIcon from '@/public/GeneralIcons/PersonsIcon'
import Image from 'next/image'
import React from 'react'
import Button from '../General/Button'

const VehicleCard = () => {
  return (
    <article className=' flex flex-col gap-3 rounded-lg p-2 ring-0 hover:ring-1 hover:ring-white '>
        <div className='overflow-hidden rounded-lg'>
            <Image src={"/Cars/Fortuner.webp"} alt="Fortuner" width={368} height={260} />
        </div>
        <div className='flex flex-col gap-4'>
            <div className='space-y-3'>
                <div className='font-semibold  text-lg'>Fortuner</div>
                <div className='font-extrabold  text-2xl'>78.90 <span className='text-gray-300 text-sm font-normal'>/ day</span></div>
            </div>
            <div className='flex bg-gray-800 items-center justify-evenly py-2 rounded-xl'> 
            <div className='flex flex-col items-center justify-center '>
                <span><CarTravelled/></span>
                <span>4000km</span>
            </div>
            <div className='flex flex-col items-center justify-center '>
                <span><GearIcon/></span>
                <span>Auto</span>
            </div><div className='flex flex-col items-center justify-center '>
                <span><PersonsIcon/></span>
                <span>4 Person</span>
            </div><div className='flex flex-col items-center justify-center '>
                <span><FuelTypeIcon/></span>
                <span>Electric</span>
            </div>
            </div>
        </div>
        <Button className='mb-2'>
        Book Now
        </Button>
    </article>
  )
}

export default VehicleCard