import Image from 'next/image'
import React from 'react'
import whatsappGif from "@/public/icons8-whatsapp.gif";
import Link from 'next/link';
const Floaters = () => {
  return (
    <div className='fixed bottom-2 right-5 z-[3]'>
        <Link href={`https://api.whatsapp.com/send?phone=91788942283`}>
        <Image src={whatsappGif} alt='Whatsapp contact' unoptimized className=' rounded-full' />
        </Link>
    </div>
  )
}

export default Floaters