import Image from "next/image";
import styles from "./home.module.css";
import carGif from "@/public/cargif.gif"
import OurServices from "./Components/Homepage/OurServices";
import WeAreHere from "./Components/Homepage/WeAreHere";
import Enjoy from "./Components/Homepage/Enjoy";
import RelaxWithUS from "./Components/Homepage/RelaxWithUS";
import HeaderAnimation from "./Components/Homepage/HeaderAnimation";
import Head from "next/head";
import React from "react";
import HowToUse from "./Components/Homepage/HowToUse";
const Testimonials = React.lazy(()=>import ("./Components/Homepage/Testimonials"));
const Home = () => {
  return (
    <>
  {/* <Head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
  </Head> */}

    {/* <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div> */}
    <div className=" sm:h-[calc(100vh-100px)] relative ">
      <div className="w-full h-full bg-gray-700 opacity-50">
        <Image src={carGif} alt="Car"  className="w-full h-full object-cover mix-blend-luminosity" unoptimized />
      </div>

      <div className="absolute top-1/2 px-6 sm:px-10 -translate-y-1/2"> 

      <h1 className="text-4xl font-bold tracking-tight aria-readonly:Taxi Service, Car Rentals, Bike Rental In Jammu and Kashmir hidden">Taxi Service, Car Rentals, Bike Rental, Cab services in Jammu and Kashmir. </h1>
      <HeaderAnimation/>
      <p>in Jammu and Kashmir and Ladakh</p>
      </div>
    </div>
      <HowToUse/>
      <OurServices/>
      <WeAreHere/>
      <Enjoy/>
      <RelaxWithUS/>
      <Testimonials/>

    </>
  );
};

export default Home;