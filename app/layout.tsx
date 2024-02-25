import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Floaters from "./Components/General/Floaters";
import { Metadata } from 'next'
import DetailBar from "./Components/General/DetailBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: {
    default:"Car Rental Jammu and Kashmir",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",

};

export default function RootLayout({ children }:any) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className="relative">
          <DetailBar/>
            <Navbar />
            <Floaters/>
            {children}
            <Footer />
          </div>
        {/* <ClientSideProviderTest/> */}
      </body>
      
    </html>
  );
}