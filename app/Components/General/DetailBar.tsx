import { contactDetailsSingle } from '@/lib/data'
import FacebookIcon from '@/public/GeneralIcons/Facebook'
import GmailIcon from '@/public/GeneralIcons/GmailIcon'
import InstagramIcon from '@/public/GeneralIcons/InstagramIcon'
import Link from 'next/link'
import React from 'react'

const DetailBar = () => {
  return (
    <section className='w-full px-8 py-2 text-xs tracking-wide flex items-center justify-between '>
        <div className=' flex gap-4 '>
            <div className='hidden sm:flex gap-2 '>
                <Link href={'/'} target='blank'><FacebookIcon width='20' height='20'/></Link>
                <Link href={'/'} target='blank'><InstagramIcon width='20' height='20'/></Link>
            </div>
            <div className='border-l aria-hidden:true hidden sm:block'></div>
            <div className='flex items-center'>
                <Link href='mailto:carrentaljammuandkashmir@gmail.com' target='blank' ><span className='flex sm:hidden'><GmailIcon width='20' height='20'/></span><span className='hidden sm:flex'>carrentaljammuandkashmir@gmail.com</span></Link>
            </div>
        </div>
        <div className='text-xs sm:text-sm'>
            <ul>
                <li><Link href={`tel:+91${contactDetailsSingle}`}>Call Now: +91 {contactDetailsSingle}</Link></li>
                <li></li>
            </ul>
        </div>
        </section>
  )
}

export default DetailBar