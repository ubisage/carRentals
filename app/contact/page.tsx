
import Image from "next/image";
import styles from "./contact.module.css";
import ContactForm from "../Components/Contact/ContactForm";
import { Suspense } from "react";
import LoadingSkelton from "../Components/Contact/LoadingSkelton";

// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);
  async function hi(){const t1 = new Promise((resolve)=>setTimeout(resolve,10000))};
  hi();



  return (
    <div className={`${styles.container} px-8`}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="Contact us" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <Suspense fallback={<LoadingSkelton/>}>
        <ContactForm/>
        </Suspense>
      </div>
    </div>
  );
};

export default ContactPage;