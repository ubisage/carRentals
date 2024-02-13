import Image from "next/image";
import styles from "./about.module.css";
import Suv from "@/public/AboutUs/Suv";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <main className="flex flex-col">
      <h2 className="text-button flex items-center justify-center my-4 text-lg font-semibold tracking-wider px-8 text-center">
        About Car Rentals Jammu and Kashmir
      </h2>
      <div className="flex flex-col sm:flex-row gap-24 px-8 sm:h-[calc(100vh-160px)] items-center">
        <div className="flex-1 items-center">
          <h1 className="text-3xl md:text-6xl">
            Your Trusted Partner for Exploring{" "}
            <span className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
              Jammu
            </span>{" "}
            and{" "}
            <span className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
              Kashmir
            </span>{" "}
            and{" "}
            <span className="text-3xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
              Ladakh
            </span>
          </h1>
        </div>
        <div className="w-full h-full relative flex-1 hidden sm:block">
          <Image
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div>
      </div>
      <section className="px-8 mt-10 flex flex-col sm:flex-row w-full sm:h-screen justify-between items-center gap-4">
        <div className="w-full sm:w-1/2 h-full">{<Suv />}</div>

        <p className=" w-full sm:w-1/2 text-sm sm:text-lg leading-6 px-3">
          Born from a love for the stunning landscapes and rich culture of Jammu
          & Kashmir and Ladakh, Car Rentals Jammu and Kashmir empowers travelers
          to discover the magic of these regions at their own pace. We offer a
          diverse fleet of well-maintained cars, comfortable cabs, and thrilling
          bikes, available for daily, weekly, or monthly rentals across major
          cities like Jammu, Srinagar, and Leh. Whether you seek the freedom of
          self-exploration with a car rental, the convenience of a reliable cab
          service, or the adrenaline rush of exploring Ladakh on a bike, we
          provide the perfect vehicle and seamless experience for your
          unforgettable journey.
        </p>
      </section>
      <section className="px-8 mt-10 h-full ">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-12 px-10 py-10  ">
          {/* <div className={`${styles.box} hover:bg-gradient-to-br from-slate-800 rounded-lg py-3 px-2`}> */}
          <div className={`${styles.box}`}>
            <h3 className="text-3xl font-semibold text-center">10+</h3>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h3 className="text-3xl font-semibold text-center">24x7</h3>
            <p>Support</p>
          </div>
          <div className={styles.box}>
            <h3 className="text-3xl font-semibold text-center">100%</h3>
            <p>Customer Retention</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
