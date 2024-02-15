import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const HowToUse = () => {
  return (
    <div className='px-8'>
    <div className="mx-auto max-w-screen-md text-center mt-8 lg:mt-12">
          <h2 className="mb-4 text-2xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            How to Use
          </h2>
          <p className="mb-5 font-light text-gray-500 text-sm sm:text-xl dark:text-gray-400">
            We provide easiest way to book with us
          </p>
        </div>
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>1. You Contact Us</AccordionTrigger>
    <AccordionContent>
      <p className='mb-3 font-semibold'>We provide 3 ways to contact us:</p>
        <ul >
            <li className="before:content-['•']"> Whatsapp(bottom-right corner of screen)</li>
            <li className="before:content-['•']"> Direct Call (+91 7889422838)</li>
            <li className="before:content-['•']"> Form (in Contact us Page)</li>
        </ul>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>2. We Contact You</AccordionTrigger>
    <AccordionContent>
      Once you message us, we will get back to you.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>

  )
}

export default HowToUse