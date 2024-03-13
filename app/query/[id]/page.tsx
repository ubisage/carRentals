import Form from "@/app/Components/General/Form"
import { carRentalVehicles } from "@/lib/data"
import Image from "next/image"

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

export default function Page({ params,searchParams }: { params: { id: string },searchParams?:{mode?:string} }) {
    const carData = carRentalVehicles.filter(car => car.id.toString() === params.id)[0]
    const ServiceType = searchParams?.mode==='carRental'? 'carRental':searchParams?.mode==='cabService'? 'cabService':searchParams?.mode==='bikeRental'?'bikeRental':undefined
    return (
        <>
        
        <div className="w-full px-10">
            <div className="w-full flex flex-col sm:flex-row gap-10">
                <div className="sm:w-1/2  h-fit rounded-lg overflow-clip">

                <Image width={1200} height={500} src={carData?.cardImage} alt={carData.vehicleName}/>
                </div>
            <div className="sm:w-1/2">
                <Form mode={ServiceType} carData ={carData}/>
            </div>
            </div>
            </div></>
    )
  }