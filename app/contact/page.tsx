
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
    <section className={`flex h-[calc(100vh-142px)] flex-col sm:flex-row items-center justify-between gap-10 px-8`}>
      <div className={`hidden sm:block sm:flex-1 h-[500px] relative`}>
        <Image src="/contact.png" alt="Contact us" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <Suspense fallback={<LoadingSkelton/>}>
        <ContactForm/>
        </Suspense>
      </div>
    </section>
  );
};

export default ContactPage;