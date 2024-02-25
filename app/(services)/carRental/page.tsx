
import Heading from '@/app/Components/General/Heading'
import VehicleCard from '@/app/Components/Services/VehicleCard'
import React from 'react'

import {carRentalVehicles} from "@/lib/data"
const CarRentalPage = () => {
  return (
    <>
        <section className='w-full flex items-center justify-center'>
        <Heading heading={'Our Impressive Collection of Cars'} subHeading={'Ranging from elegant sedans to powerful sports car,all carefully selected to provide our customers with the ultimate driving experience'}/>
        </section>
        <section className="w-full flex flex-wrap items-center justify-center gap-10 mt-10">
        {carRentalVehicles.map((car) => (
          <VehicleCard key={car.id} vehicle={car} />
        ))}
      </section>
        
    </>
  )
}

export default CarRentalPage