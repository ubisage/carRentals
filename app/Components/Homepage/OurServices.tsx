import Image from "next/image";
import React from "react";
import Car1 from "@/public/car1.jpeg";
import Car2 from "@/public/car2.jpeg";
import Bike from "@/public/bike.webp";
import Link from "next/link";
const OurServices = () => {
  return (
    <div className="mt-8">
      {/* <div className='flex flex-col justify-evenly items-center'>
      <h2 className='text-4xl font-bold'>OUR SERVICES</h2>
      <p>We take care of you and yours</p>
      </div>
      <div className='flex'>

      <div className='border p-4'>
        <div>
          <div><Image src={Car1} alt='Car Rental' width={300} height={200} /></div>
        </div>
        <div className='mt-2'>
          <h3 className='text-2xl font-bold'>Car Rentals</h3>
        </div>
        <div>
          <span className='text-sm'> Rs 500/day</span>
        </div>
        <div>
          <p>No suprises! <br/> What you see is what you pay</p>
        </div>
      </div>
      </div> */}
      <section className="py-20  ">
        <div className="px-8">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Services
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We focus on your comfort, ease, and capital while providing
              suitable packages that fulfil your needs. Drop your details and we
              will back to you asap
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-evenly mt-16 gap-4">
            <div className=" drop-shadow-lg">
              <div className="card light:border overflow-clip border-black  rounded-[10px_50px_10px_10px] hover:shadow-[13px_15px_0px_0px_#7f56d9,0px_1px_2px_0px_#7F56D9] transition-shadow text-center flex flex-col h-full">
                <div className="max-w-[360px]  max-h-[200px] overflow-hidden flex items-center justify-center  mx-auto">
                  <Image src={Car1} alt="Cab Service" width={360} height={180}  />
                </div>
                <h3 className="font-semibold mt-8 px-4 text-lg">
                  Cab Services
                </h3>
                <ul role="list" className="mb-4 mt-4 px-4 space-y-3 text-left text-xs *:sm:text-base">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Punctual and professional drivers
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Safe and comfortable vehicles
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">Fixed fares </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      City tours and airport transfers{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">Door-to-door service </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      24/7 booking availability
                    </span>
                  </li>
                </ul>
                <div className="my-2 sm:mt-auto px-4 sm:py-4">
                  <Link
                    href={"/services/managed-services"}
                    aria-label="Managed Services"
                  >
                    <button className="msm:text-sm bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-0 sm:mt-6">
                      Book Now {'->'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" drop-shadow-lg">
              <div className="card light:border overflow-clip border-black  rounded-[10px_50px_10px_10px] hover:shadow-[13px_15px_0px_0px_#7B61FF,0px_1px_2px_0px_#7F56D9] transition-shadow text-center flex flex-col h-full">
                <div className="  mx-auto">
                  <Image
                    src={Car2}
                    alt="Cab Service"
                    width={360}
                    height={180}
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold mt-8 px-4 text-lg">Car Rentals</h3>
                <ul role="list" className="mb-4 mt-4 px-4 space-y-3 text-left text-xs *:sm:text-base">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Wide range of vehicles
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Flexible rental options
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">Affordable pricing </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">Airport transfers </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Local sightseeing tours{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      24/7 customer support{" "}
                    </span>
                  </li>
                </ul>
                <div className="my-2 sm:mt-auto px-4 sm:py-4">
                  <Link
                    href={"/services/managed-services"}
                    aria-label="Managed Services"
                  >
                    <button className="msm:text-sm bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-0 sm:mt-6">
                      Book Now {'->'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" drop-shadow-lg">
              <div className="card light:border overflow-clip border-black  rounded-[10px_50px_10px_10px] hover:shadow-[13px_15px_0px_0px_#7B61FF,0px_1px_2px_0px_#7F56D9] transition-shadow text-center flex flex-col h-full">
                <div className="  mx-auto">
                  <Image src={Bike} alt="Cab Service" width={360} height={180} />
                </div>
                <h3 className="font-semibold mt-8 px-4 text-lg">
                  Bike Rentals
                </h3>
                <ul role="list" className="mb-4 mt-4 px-4 space-y-3 text-left text-xs *:sm:text-base">
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">Variety of bikes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Helmets and safety gear included
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Luggage storage options
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Maps and route suggestions{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Unforgettable adventure{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400">
                      Daily and multi-day rentals{" "}
                    </span>
                  </li>
                </ul>
                <div className="my-2 sm:mt-auto px-4 sm:py-4">
                  <Link
                    href={"/services/managed-services"}
                    aria-label="Managed Services"
                  >
                    <button className="msm:text-sm bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-0 sm:mt-6">
                      Book Now {'->'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center mt-14">
                            <Link
                                className="w-12 h-12 rounded-full border-2 border-primary flex justify-center items-center text-primary"
                                href="/"
                            >
                                <ArrowRightIcon height="10" />
                            </Link>
                        </div> */}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
