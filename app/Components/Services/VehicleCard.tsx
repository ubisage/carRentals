import CarTravelled from '@/public/GeneralIcons/CarTravelled'
import FuelTypeIcon from '@/public/GeneralIcons/FuelTypeIcon'
import GearIcon from '@/public/GeneralIcons/GearIcon'
import PersonsIcon from '@/public/GeneralIcons/PersonsIcon'
import Image from 'next/image'
import React from 'react'
import Button from '../General/Button'
import Link from 'next/link'

interface VehicleProps  {
    id:number,
    cardImage: string,
    vehicleName: string,
    pricePerDay:number,
    distanceTravelled:number,
    gearShiftType: string,
    personCapacity:number,
    fuelType: string,
    bookNowLink:string,
    baggageCapacity:number
}
const VehicleCard = ({vehicle}:{vehicle:VehicleProps}) => {
  return (
    <article className=' flex flex-col gap-3 rounded-lg p-2 ring-0 hover:ring-1 hover:ring-white '>
        <div className='overflow-hidden rounded-lg'>
            <Image src={vehicle.cardImage} alt={vehicle.vehicleName} width={368} height={260} />
        </div>
        <div className='flex flex-col gap-4'>
            <div className='space-y-3'>
                <div className='font-semibold  text-lg'>{vehicle.vehicleName}</div>
                <div className='font-extrabold  text-2xl'>₹{vehicle.pricePerDay} <span className='text-gray-300 text-sm font-normal'>/ day</span></div>
            </div>
            <div className='flex bg-gray-800 items-center justify-evenly py-2 rounded-xl'> 
            <div className='flex flex-col items-center justify-center '>
                <span><CarTravelled/></span>
                <span>{vehicle.distanceTravelled}</span>
            </div>
            <div className='flex flex-col items-center justify-center '>
                <span><GearIcon/></span>
                <span>{vehicle.gearShiftType}</span>
            </div><div className='flex flex-col items-center justify-center '>
                <span><PersonsIcon/></span>
                <span>{vehicle.personCapacity}</span>
            </div><div className='flex flex-col items-center justify-center '>
                <span><FuelTypeIcon/></span>
                <span>{vehicle.fuelType}</span>
            </div>
            </div>
        </div>
        <Link href={vehicle.bookNowLink}>
        <Button className='mb-2'>
        Book Now
        </Button>
        </Link>
    </article>
  )
}

export default VehicleCard