import Image from "next/image";
import styles from "./home.module.css";
import carGif from "@/public/cargif.gif"
import OurServices from "./Components/Homepage/OurServices";
import WeAreHere from "./Components/Homepage/WeAreHere";
import Enjoy from "./Components/Homepage/Enjoy";
import RelaxWithUS from "./Components/Homepage/RelaxWithUS";
const Home = () => {
  return (
    <>


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
    <div className="h-[calc(100vh-100px)] relative ">
      <div className="w-full h-full bg-gray-700 opacity-50">
        <Image src={carGif} alt="Car"  className="w-full h-full object-cover mix-blend-luminosity"/>
      </div>

      <div className="absolute top-1/2 left-10"> 
      <h1 className="text-4xl font-bold tracking-tight">Taxi Service, Car Rentals, Bike Rental, </h1>
      <p>in Jammu and Kashmir</p>
      </div>
    </div>
      <OurServices/>
      <WeAreHere/>
      <Enjoy/>
      <RelaxWithUS/>

    </>
  );
};

export default Home;